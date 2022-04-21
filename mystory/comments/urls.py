from django.urls import path
from .import views
from .views import CommentDetailView
from .views import CommentListView

urlpatterns = [
    # this is to specify to get a single item fron id as in : id (mongo)
    path('<int:pk>/', CommentDetailView.as_view()),
    path('', CommentListView.as_view()),
]
