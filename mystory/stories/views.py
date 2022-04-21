from django.shortcuts import render
from django.http.response import HttpResponse
# Create your views here. ..below is boilerplate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  # to send status code

# import model and serializer
from .models import Story
from .serializers import StorySerializer, PopulatedStorySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# to get all items


class StoryListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # get all the stories

    def get(self, request):
        storys = Story.objects.all()  # ORM function to get all stories
        serialized_storys = PopulatedStorySerializer(storys, many=True)
        return Response(serialized_storys.data, status=status.HTTP_200_OK)

    def post(self, request):  # post and get is on same ORM so yeah... def n post by same route as in mongodb
        ch = StorySerializer(data=request.data)
        if ch.is_valid():
            ch.save()  # django ORM to save
            return Response(ch.data, status=status.HTTP_201_CREATED)
        else:
            return Response(ch.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class StoryDetailView(APIView):

    def delete(self, request, pk):
        try:
            ch = Story.objects.get(id=pk)
        except:
            return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)
        ch.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request, pk):
        try:
            ch = Story.objects.get(id=pk)

        except:
            return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)
        # serialize for sending over the wire
        serialized_ch = PopulatedStorySerializer(ch)
        return Response(serialized_ch.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            ch = Story.objects.get(id=pk)
        except:
            return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)
        updated_ch = StorySerializer(ch, data=request.data)
        if updated_ch.is_valid():
            updated_ch.save()
            return Response(updated_ch.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_ch.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


def home(request):
    return HttpResponse('<h1>Hello /ᐠ｡‸｡ᐟ\ﾉ</h1>')
