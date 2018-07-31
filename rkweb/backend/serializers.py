from rest_framework import serializers
from backend.models import Lock


class LockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lock
        fields = ('id', 'name', 'ip_address', 'created_by')