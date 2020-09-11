from django.shortcuts import render
from django.http import HttpResponse
#from django.http import JsonResponse
import os
import sys
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

def index(request):
    emojiList = ["🍔","🍖","🍚","🍕","🥗","🍜"]
    foodnameList = ["햄버거","고기","밥","피자","샐러드","국수"]
    index = randint(0, len(emojiList)-1)
    emo = emojiList[index]
    foodname = foodnameList[index]
    return render(request, 'mapsearch/index.html' , {'emo': emo, 'foodname' : foodname})

def map(request):
    return render(request, 'mapsearch/map.html')