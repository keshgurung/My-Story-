# Create your views here.
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Reading
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  # status code
from .serializers import ReadingSerializer


class ReadingDetailView(APIView):
    def delete(self, request, pk):
        try:
            reading = Reading.objects.get(id=pk)
            reading.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        reading = reading.objects.get(id=pk)  # django ORM method to grab
        updated_reading = ReadingSerializer(reading, data=request.data)
        if updated_reading.is_valid():
            updated_reading.save()
            return Response(updated_reading.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_reading.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        reading = Reading.objects.get(id=pk)
        serialized_reading = ReadingSerializer(reading)
        return Response(serialized_reading.data, status=status.HTTP_200_OK)


class ReadingListView(APIView):
    # will kick in if someone tries to POST /cats/
    def post(self, request):
        reading = ReadingSerializer(data=request.data)
        if reading.is_valid():
            reading.save()  # <--- django ORM method to save to db
            return Response(reading.data, status=status.HTTP_201_CREATED)
        else:
            return Response(reading.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # responder to GET /cats/
    def get(self, request):
        readings = Reading.objects.all()
        serialized_readings = ReadingSerializer(readings, many=True)
        return Response(serialized_readings.data, status=status.HTTP_200_OK)
