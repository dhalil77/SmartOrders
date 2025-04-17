# models.py
from django.db import models

class R_User(models.Model):
    ROLE_CHOICES = (
        ('admin', 'Administrateur'),
        ('user', 'Utilisateur standard'),
    )
    
    github_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.role})"