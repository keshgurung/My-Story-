
from django.urls import path, include
from .import views
from .views import StoryListView

urlpatterns = [
    # path('<int:pk>/', StoryDetailView.as_view()),
    path('', StoryListView.as_view()),
]
