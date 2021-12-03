from rest_framework import serializers
from .models import Story
from genre.serializers import GenreSerializer
from comments.serializers import CommentSerializer
from rating.serializers import RatingSerializer


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'


class PopulatedStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'
    genre = GenreSerializer
    comment_set = CommentSerializer(read_only=True, many=True)
    rating_set = RatingSerializer(read_only=True, many=True)
