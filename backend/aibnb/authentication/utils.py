from django.core.mail import EmailMessage
import os

class Util:
    @staticmethod
    def send_email(data):
        print("Sending email")
        email = EmailMessage(
            subject=data['email_subject'],
            body=data['email_body'],
            from_email=os.environ.get('EMAIL_USER'),
            to=[data['to_email']]
        )
        print(email)
        email.send()
