from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED, HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_422_UNPROCESSABLE_ENTITY
from django.contrib.auth.views import redirect_to_login

from backend.models import Lock, LockPermissions


class LoginView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            return Response({"message": "User is logged in"}, status=HTTP_200_OK)

        return Response({"error": "User is not logged in"}, status=HTTP_401_UNAUTHORIZED)

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({"message": "Login successful"}, status=HTTP_200_OK)

        return Response({"error": "Login failed"}, status=HTTP_401_UNAUTHORIZED)


@api_view(["GET"])
def logout_view(request):
    if not request.user.is_anonymous:
        logout(request)
        return Response({"message": "Logout successful"}, status=HTTP_200_OK)
    
    return Response({"error": "User is not logged in"}, status=HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def register_view(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")
    password_confirm = request.data.get("passwordConfirm")

    if password != password_confirm:
        return Response({"error": "Passwords do not match"}, status=HTTP_422_UNPROCESSABLE_ENTITY)
    
    try:
        user = User.objects.create_user(username=username, email=email, password=password)
    except Exception as e:
        return Response({"error": e.__dict__}, status=HTTP_422_UNPROCESSABLE_ENTITY)

    login(request,user)
    return Response({"message": "User created successfully"}, status=HTTP_200_OK)


class LocksView(APIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)

    test_locks = [
        { "lockName": 'testLock1', "ipAddr": '0.0.0.1', "id": 1 },
        { "lockName": 'testLock2', "ipAddr": '0.0.0.2', "id": 2 },
        { "lockName": 'testLock3', "ipAddr": '0.0.0.3', "id": 3 },
    ]

    def get(self, request):
        allowed_locks = Lock.objects.all().filter(allowed_users__id__exact=request.user.id)
        locks = []
        for lock in allowed_locks:
            lock_dict = {
                "lockName": lock.name,
                "ipAddr": lock.ip_address,
                "id": lock.id
            }
            locks.append(lock_dict)
        return Response(locks, status=HTTP_200_OK)

    def post(self, request):
        # Add a new lock associated with the user
        return Response()