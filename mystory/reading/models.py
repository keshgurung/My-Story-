from django.db import models

# Create your models here.


class Reading(models.Model):
    # no need to give id.. djaango will provide a unique id itself
    stories = models.ForeignKey("stories.Story", on_delete=models.CASCADE)


def __str__(self):
    return "List" + self.name
