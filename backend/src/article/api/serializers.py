from rest_framework import serializers
from article.models import Article
from django.contrib.auth.models import User


class ArticleSerializer(serializers.ModelSerializer): 
    class Meta:
        model=Article
        fields=('id','title','content')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)
