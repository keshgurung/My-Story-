from django.urls import path
from .import views
from .views import RatingDetailView
from .views import RatingListView

urlpatterns = [
    # this is to specify to get a single item feon id as in : id (mongo)
    path('<int:pk>/', RatingDetailView.as_view()),
    path('', RatingListView.as_view()),
]
