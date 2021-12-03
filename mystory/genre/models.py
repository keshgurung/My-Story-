
from django.db import models
from django.core.validators import MinLengthValidator


class Genre(models.Model):
    # no need to give id.. djaango will provide a unique id itself
    title = models.CharField(max_length=100)
    short_form = models.CharField(
        max_length=2, validators=[MinLengthValidator(2)])


def __str__(self):
    return "Genre" + self.name
