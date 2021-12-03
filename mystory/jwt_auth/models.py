from django.db import models
from django.contrib.auth.models import AbstractUser

# we will get some fields through the abstract user itself ..like uname.. password, passwordconfirmation,


class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     profile_image = models.CharField(max_length=500)
