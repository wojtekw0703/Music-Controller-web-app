from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Room
        fields = ('id','code','guest_can_ause','votes_to_skip','created_at')
