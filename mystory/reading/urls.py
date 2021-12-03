from django.urls import path
from .import views
from .views import ReadingDetailView
from .views import ReadingListView

urlpatterns = [
    # this is to specify to get a single item feon id as in : id (mongo)
    path('<int:pk>/', ReadingDetailView.as_view()),
    path('', ReadingListView.as_view()),
]
