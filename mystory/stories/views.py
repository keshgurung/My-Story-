from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here. ..below is boilerplate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  # to send status code

# import model and serializer
from .models import Story
from .serializers import StorySerializer

# to get all items


class StoryListView(APIView):
    # get all the stories
    def get(self, request):
        storys = Story.objects.all()  # ORM function to get all stories
        serialized_storys = StorySerializer(storys, many=True)
        return Response(serialized_storys.data, status=status.HTTP_200_OK)


def home(request):
    return HttpResponse('<h1>Hello /ᐠ｡‸｡ᐟ\ﾉ</h1>')
