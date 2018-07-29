import time

from django.conf import settings
from django.contrib.auth.views import redirect_to_login


SESSION_TIMEOUT_KEY = '_session_init_timestamp_'


class SessionTimeoutMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not hasattr(request, 'session') or request.session.is_empty():
            return self.get_response(request)

        init_time = request.session.setdefault(SESSION_TIMEOUT_KEY, time.time())

        expire_seconds = getattr(
            settings, 'SESSION_EXPIRE_SECONDS', settings.SESSION_COOKIE_AGE
            )

        session_is_expired = time.time() - init_time > expire_seconds

        if session_is_expired:
            request.session.flush()
            return redirect_to_login(next=request.path)

        request.session[SESSION_TIMEOUT_KEY] = time.time()

        return self.get_response(request)