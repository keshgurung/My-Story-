# Create your views here.
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Genre
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  # status code
from .serializers import GenreSerializer


class GenreDetailView(APIView):
    def delete(self, request, pk):
        try:
            genre = Genre.objects.get(id=pk)
            genre.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        genre = Genre.objects.get(id=pk)  # django ORM method to grab
        updated_genre = GenreSerializer(genre, data=request.data)
        if updated_genre.is_valid():
            updated_genre.save()
            return Response(updated_genre.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_genre.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        genre = Genre.objects.get(id=pk)
        serialized_genre = GenreSerializer(genre)
        return Response(serialized_genre.data, status=status.HTTP_200_OK)


class GenreListView(APIView):
    # will kick in if someone tries to POST /cats/
    def post(self, request):
        genre = GenreSerializer(data=request.data)
        if genre.is_valid():
            genre.save()  # <--- django ORM method to save to db
            return Response(genre.data, status=status.HTTP_201_CREATED)
        else:
            return Response(genre.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # responder to GET /cats/
    def get(self, request):
        genres = Genre.objects.all()
        serialized_genres = GenreSerializer(genres, many=True)
        return Response(serialized_genres.data, status=status.HTTP_200_OK)
