from django.db import models


# Create your models here.
# estblishing a model called character.. django will use this to create a sql table


class Story(models.Model):
    # no need to give id.. djaango will provide a unique id itself
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    description = models.CharField(max_length=10000)
    rating = models.IntegerField()


def __str__(self):
    return "Story" + self.name
