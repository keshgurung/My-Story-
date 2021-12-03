from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Rating(models.Model):
    rating = models.PositiveIntegerField(
        default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    stories = models.ForeignKey("stories.Story", on_delete=models.CASCADE)

    def __str__(self):
        return f"Rating: {self.rating}/5."
