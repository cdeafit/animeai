import threading
from urllib import request
from requests import get
import json
from bs4 import BeautifulSoup
import pandas as pd
import sqlite3
from config import *
import time
class Extractor(threading.Thread):
    headers = {
                "User-Agent": "MAL scraping for University project (Anime recommendation model). Contact juanda20202@hotmail.com if scraping is overburdening the server"
            }

    def __init__(self, inf, top, i):
        self.__inf = inf
        self.__top = top
        self.__i = i
        threading.Thread.__init__(self)

    def queryUsers(self):
        with sqlite3.connect(DB) as conn:
            return list(pd.read_sql('SELECT DISTINCT username from reviews;',conn)['username'])

    def getAnimelist(self, username, userid):
        api = f"https://myanimelist.net/animelist/{username}/load.json?status=7&offset=0"

        try:    
                response = get(api, headers=self.headers, timeout = 30)
        except Exception as e:
                print('Request timeout ', e)
                return
        if response.status_code == 403:
            return 'Error'
        df = pd.DataFrame.from_dict(response.json()) 
        
        df['user_id'] = [userid]*len(df)
        #status 1 = watching 
        #status 2 = completed 
        #status 3 = on Hold
        #status 4 = dropped
        dfcleaned = df[df['status'] == 2][['user_id','anime_id','score','anime_title']].reset_index()
        return dfcleaned 




    def run(self):
        users = self.queryUsers()
        fails = 0
        succesfull = 0
        user_fails = []
        exTime = time.time()

        interval = [self.__inf,self.__top] #interval of extraction
        auxrun = True
        paused = ''
        numberPaused = 1
        print(interval)
        for userid,user in enumerate(users[interval[0]:interval[1]]):
            if auxrun:
                animelistData = self.getAnimelist(user,userid+self.__inf)
                succesfull += 1
                auxrun = False
            else:
                try:
                    aux = self.getAnimelist(user,userid+self.__inf)
                    if type(aux) == str:
                        print(f'-------Paused {numberPaused}-------------')
                        paused = f"Interval: {interval[0]} --- {interval[1]}.\nPausedAt: {userid+self.__inf}"
                        print(paused)     
                        print('Time: ', time.time()-exTime)
                        print('Succesful: ',succesfull)
                        print('Fails: ',fails)
                        print('-----------------------------','\n')
                        fails += 1
                        numberPaused += 1
                        time.sleep(360)
                        print(f'Thread {self.__i} continuing')

                    if aux is not None:
                        animelistData = animelistData.append(aux, ignore_index = True)
                        succesfull += 1
                    else:
                        fails += 1
                        user_fails.append([userid,user])
                except Exception as e:
                    fails += 1
                    user_fails.append([userid,user])

        animelistData.drop('index', axis=1, inplace=True)
        exTime = time.time()-exTime
        print(animelistData)
        print('Fails: ', fails)
        print('Time: ', exTime)
        print('Succesful: ',succesfull)
        #print(paused)
        animelistData.to_csv(f"animelistData{self.__i}.csv")


threads = 4
interval = int(50524/threads)-1

for i in range(threads):
    Extractor( i*interval, i*interval + interval, i+1).start()







#Join merging tables
#'type','source','scored_by','score','favorites','members','popularity','studio'
