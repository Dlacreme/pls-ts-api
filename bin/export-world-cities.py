#!/usr/bin/env python3

cities_list_path = './db/worldcities.csv'

country_inserted = []

def insert_country(code, label):
    country_inserted.append(code)
    print('INSERT [{0}]{1}', code, label)

def insert_city(country_code, label):
    print('INSERT {0}-{1}', country_code, label)

def handle_city(city):
    details = city.strip().split(',')
    name = details[0]
    name_ascii = details[1]
    lat = details[2]
    lon = details[3]
    country = details[4]
    iso = details[5]
    if iso not in country_inserted:
        insert_country(iso, country)
    insert_city(iso, name)


with open(cities_list_path, 'r') as cities:
    for i, city in enumerate(cities):
        if i == 0:
            continue
        handle_city(city.replace('"', ''))