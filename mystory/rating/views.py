# Create your views here.
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Rating
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  # status code
from .serializers import RatingSerializer


class RatingDetailView(APIView):
    def delete(self, request, pk):
        try:
            rating = Rating.objects.get(id=pk)
            rating.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        rating = Rating.objects.get(id=pk)  # django ORM method to grab
        updated_rating = RatingSerializer(rating, data=request.data)
        if updated_rating.is_valid():
            updated_rating.save()
            return Response(updated_rating.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_rating.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        rating = Rating.objects.get(id=pk)
        serialized_rating = RatingSerializer(rating)
        return Response(serialized_rating.data, status=status.HTTP_200_OK)


class RatingListView(APIView):
    # will kick in if someone tries to POST /cats/
    def post(self, request):
        rating = RatingSerializer(data=request.data)
        if rating.is_valid():
            rating.save()  # <--- django ORM method to save to db
            return Response(rating.data, status=status.HTTP_201_CREATED)
        else:
            return Response(rating.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # responder to GET /cats/
    def get(self, request):
        ratings = Rating.objects.all()
        serialized_ratings = RatingSerializer(ratings, many=True)
        return Response(serialized_ratings.data, status=status.HTTP_200_OK)
