import sqlite3
import pandas as pd
from config import *

#Users animelist data frame
UAL_df = pd.read_csv('animelistMerged.csv')
UAL_df.drop('Unnamed: 0', axis=1, inplace=True)

#animes dataframe
animes_df = pd.read_sql('SELECT * from animes;',sqlite3.connect(DB))

query = """
SELECT anime_id,tag_name,t.tag_id
FROM anime_tags at 
INNER JOIN tags t ON at.tag_id = t.tag_id;
"""
genres_df = pd.read_sql(query,sqlite3.connect(DB))
genres_df = genres_df.groupby('anime_id').agg(lambda x: list(x)).reset_index()

animes_df = animes_df.join(genres_df.set_index('anime_id'), on = 'anime_id')[['anime_id','overall_rating','members','tag_name','tag_id','studio_id']]
UAL_df = UAL_df.join(animes_df.set_index('anime_id'), on = 'anime_id')
UAL_df.to_csv('usersAnimeListFull.csv')

