from django.conf.urls import url
from django.urls import path,include
from authentication.views import (
    LoginView, LogoutView, UserDetailsView, PasswordChangeView,
    PasswordResetView, PasswordResetConfirmView
)
from authentication.registration.views import RegisterView, VerifyEmailView
from django.views.generic import TemplateView

urlpatterns = [
    # URLs that do not require a session or valid token
    path('password/reset/', PasswordResetView.as_view(),
        name='rest_password_reset'),
   path('password/reset/confirm/', PasswordResetConfirmView.as_view(),
        name='rest_password_reset_confirm'),
    path('login/', LoginView.as_view(), name='rest_login'),

    # URLs that require a user to be logged in with a valid session / token.
    path('logout/', LogoutView.as_view(), name='rest_logout'),
    path('user/', UserDetailsView.as_view(), name='rest_user_details'),
    path('password/change/', PasswordChangeView.as_view(),
        name='rest_password_change'),
    path('signup/', RegisterView.as_view(), name='rest_register'),
  
    path('verify-email/', VerifyEmailView.as_view(), name='rest_verify_email'),
     url(r'^account-confirm-email/(?P<key>[-:\w]+)/$', TemplateView.as_view(),
        name='account_confirm_email'),

]