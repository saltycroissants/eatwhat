from django.shortcuts import render
from django.http import HttpResponse
#from django.http import JsonResponse
import os
import sys
import requests
from random import randint
#import json
#import requests #pip3 install requests
# Create your views here.

'''
def index(request):
    url = "https://openapi.naver.com/v1/search/local.json"
    param = {
        "query" : "노은동 고기",
        "display" : 5
    }
    nheaders ={
        "X-Naver-Client-Id" : "hBwX2RgYzXT21cJDCpTR",
        "X-Naver-Client-Secret" : "jSx89D1yl0"
    }
    res = requests.get(url,headers =nheaders, params =param)
    #log.debug(res.status_code)
    return JsonResponse(res.json())
    '''
foodname_global = ""

def index(request):
    emojiList = ["🍔","🍖","🍚","🍕","🥗","🍜"]
    foodnameList = ["햄버거","고기","밥","피자","샐러드","국수"]
    index = randint(0, len(emojiList)-1)
    #emo = emojiList[index]
    #foodname = foodnameList[index]
    global foodname_global
    foodname_global = foodnameList[index]
    return render(request, 'mapsearch/index.html' , {'emo': emojiList[index], 'foodname' : foodnameList[index]})

def map(request):
    url = "https://openapi.naver.com/v1/search/local.json"
    global foodname_global
    param = {
        "query" : foodname_global,
        "display" : 5
    }
    nheaders ={
        "X-Naver-Client-Id" : "hBwX2RgYzXT21cJDCpTR",
        "X-Naver-Client-Secret" : "jSx89D1yl0"
    }
    res = requests.get(url,headers =nheaders, params =param)
    #log.debug(res.status_code)
    if (res.status_code != 200): 
        json_res = "error"
    else : 
        json_res = res.json()   
  
    return render(request, 'mapsearch/map.html', {'json_res' :json_res})