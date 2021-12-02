from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here.


def home(request):
    return HttpResponse('<h1>Hello kesh/ᐠ｡‸｡ᐟ\ﾉ</h1>')


def about(request):
    return HttpResponse('<h1>Hello ..welcome to my story about page.../ᐠ｡‸｡ᐟ\ﾉ</h1>')
