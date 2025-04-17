import json
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.utils.decorators import method_decorator
from ...models.register.r_user import R_User

@method_decorator(csrf_exempt, name='dispatch')
class LoginUserView(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            
            # Récupérer ou créer l'utilisateur
            user, created = R_User.objects.update_or_create(
                github_id=data.get('github_id'),
                defaults={
                    'name': data.get('name'),
                    'email': data.get('email'),
                }
            )
            
            return JsonResponse({
                'success': True,
                'user_id': user.id,
                'role': user.role,
                'name': user.name
            })
            
        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=400)