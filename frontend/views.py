from django.shortcuts import render

# Create your views here.

# Rendering the index template and then React takes care of that
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') 
