from django.urls import path
from .import views
from .views import GenreDetailView
from .views import GenreListView

urlpatterns = [
    # this is to specify to get a single item feon id as in : id (mongo)
    path('<int:pk>/', GenreDetailView.as_view()),
    path('', GenreListView.as_view()),
]
