#%%
import pandas as pd
import json
import unidecode
import os

#%%
d = pd.read_csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSRAVptPCwuZsU8CzVBi9BT_yWnH8k-ZetjDoswb1mGNnGSlpvgZ2HyaAqn4ssDqG-xbFneD-48X9M1/pub?gid=0&single=true&output=csv')

#%%
d.fillna('', inplace=True)

#%%
d.columns

#%%
d.ft = d.ft.apply(lambda x: x.split('/')[-1])

#%%
d[['j', 'p']] = d[['j', 'p']].applymap(lambda x: x.lower().capitalize())
d.drop(columns=['Unnamed: 10', 'Unnamed: 11', 'Unnamed: 12', 'k', 'e', 'v'], inplace=True)

#%%
d.head(3)

#%%
with open('./data/data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(list(d.to_dict(orient='index').values()),  ensure_ascii=False))


#%%
