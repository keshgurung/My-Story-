from django.db import models


# Create your models here.
# estblishing a model called character.. django will use this to create a sql table


class Story(models.Model):
    # no need to give id.. djaango will provide a unique id itself
    title = models.CharField(max_length=100)
    genre = models.ForeignKey("genre.Genre", on_delete=models.CASCADE)
    # CASCADE is not a good option maybe here as it will delete the story assigned to it too .

    description = models.TextField(max_length=10000)


def __str__(self):
    return "Story" + self.name
