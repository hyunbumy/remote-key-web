from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED, HTTP_200_OK, HTTP_400_BAD_REQUEST


@api_view(["POST"])
def login_view(request):
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
    