from django.db import models
# Create your models here.


class Comment(models.Model):
    text = models.TextField()
    stories = models.ForeignKey("stories.Story", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.text}"
