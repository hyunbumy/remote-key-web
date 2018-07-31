from django.db import models
from django.contrib.auth.models import User

class Lock(models.Model):
    class Meta:
        db_table = "locks"

    name = models.CharField(max_length=100)
    access_code = models.CharField(max_length=128)
    ip_address = models.GenericIPAddressField(unique=True)
    created_by = models.ForeignKey(User, related_name='created_by', on_delete=models.CASCADE)
    allowed_users = models.ManyToManyField(User, related_name='allowed_users', through='LockPermissions')


class LockPermissions(models.Model):
    class Meta:
        db_table = "lock_permissions"
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lock = models.ForeignKey(Lock, on_delete=models.CASCADE)

    @staticmethod
    def make_association(user, lock):
        return LockPermissions.objects.create(user=user, lock=lock)