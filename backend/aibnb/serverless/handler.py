# serverless/handler.py

from django.core.wsgi import get_wsgi_application
from django.http import HttpRequest
import json

# Set up Django
application = get_wsgi_application()

def handler(request: HttpRequest, context):
    # Pass the request to Django application
    response = application(request)
    
    # Convert Django response to JSON serializable format
    body = response.content.decode('utf-8')
    headers = dict(response.items())
    
    # Return response in format expected by Vercel
    return {
        'statusCode': response.status_code,
        'body': body,
        'headers': headers
    }
