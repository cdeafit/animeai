from numpy import random
import pandas as pd
import sqlite3
import json

DB = 'anime.db'
with sqlite3.connect(DB) as conn:
    random_animes = pd.read_sql('SELECT anime_id FROM animes ORDER BY RANDOM() LIMIT 10;',conn).anime_id.tolist()

random_output = {anime:random.randint(100) for anime in random_animes}

with open("random_model_output.json", "w") as outfile:
    json.dump(random_output, outfile)

