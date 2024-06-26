from django.urls import path
from authentication.views import *
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('send-password-reset-email/', SendPasswordResetEmailView.as_view(), name='send-reset-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('verify-user/', UserEmailVerificationView.as_view(), name='verify-user'),
    path('delete-user/', UserDeleteView.as_view(), name='delete-user'),
    path('update-user/', UserUpdateView.as_view(), name='update-user'),
]
