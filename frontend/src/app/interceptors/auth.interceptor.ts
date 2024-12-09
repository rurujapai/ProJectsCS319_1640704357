import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  if (token) {

    if (authService.isTokenExpired(token)) {
      authService.logout(); // Log out the user if token is expired
      router.navigate(['/login']); // Redirect to login
      return next(req); // Proceed without the request (or handle it based on your use case)
    }

    // Clone the request to add the Authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(authReq);
  }

  return next(req); // No token, proceed without modification
};
