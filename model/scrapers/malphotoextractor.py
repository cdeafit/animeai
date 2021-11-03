import sqlite3
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
from config import *
import threading
import time 
DB = 'anime.db'
with sqlite3.connect(DB) as conn:
    anime_id = pd.read_sql('SELECT anime_id from animes;',conn)['anime_id'].tolist()

class Extractor(threading.Thread):

    def __init__(self, inf, top, i):
        self.__inf = inf
        self.__top = top
        self.__i = i
        threading.Thread.__init__(self)

    def scrape_anime_photo(self,id):

        url = 'https://myanimelist.net/anime/'+str(id)
        headers = {
            "User-Agent": "MAL scraping for University project (Anime recommendation model). Contact juanda20202@hotmail.com if scraping is overburdening the server"
            }
        try:
            response = get(url, headers=headers, timeout = 30)
            if response.status_code != 200:
                print('---------------- SLEEP ----------------')
                time.sleep(200)
        except:
            print('Request timeout')
            return 'TIME OUT'

        #Creates the soup object    
        html_soup = BeautifulSoup(response.text, 'html.parser')
        try:
            img = html_soup.find_all('img',{"class": 'ac'})[0]['data-src']
        except:
            img = 'NAN'
        return img




    def run(self):

        img = []
        done = 0

        for id in anime_id[self.__inf:self.__top]:
            result = self.scrape_anime_photo(id)
            if result == 'NOT FOUND' or result == 'TIME OUT':
                print(result)
            img.append(result)
            done += 1
            print(done*self.__i) if done%10 == 0 else 0

        print(pd.DataFrame.from_dict({'anime_id': anime_id[self.__inf:self.__top], 'img':img}))
        pd.DataFrame.from_dict({'anime_id': anime_id[self.__inf:self.__top], 'img':img}).to_csv(f'anime_imgs{self.__i}.csv')


threads = 4
interval = int(len(anime_id)/threads)

for i in range(threads):
    Extractor( i*interval, i*interval + interval, i+1).start()






