from rest_framework import serializers
from .models import Genre
from django.db import models


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
