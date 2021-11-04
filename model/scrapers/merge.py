from urllib import request
from requests import get
import json
from bs4 import BeautifulSoup
import pandas as pd
import sqlite3
from config import *
import time

def merge(threads,file):
    animelistMerged = pd.read_csv(file+'1.csv')
    for i in range(2,threads+1):
        animelistMerged =animelistMerged.append(pd.read_csv(file+f'{i}.csv'))
    animelistMerged.drop('Unnamed: 0', axis=1, inplace=True)
    animelistMerged.to_csv(file+'_merged.csv')

if __name__ == '__main__':
        merge(threads=4, file = 'anime_imgs')
    