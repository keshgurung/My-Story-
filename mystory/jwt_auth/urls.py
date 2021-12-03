from django.urls import path
from .views import RegisterView, LoginView

urlpatterns = [

    # this is to specify to get a single item feon id as in : id (mongo)
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
]
