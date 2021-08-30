import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';
import { JwtResponse } from '../interfaces/jwt-response';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthService {
    authSubject = new BehaviorSubject(false);
    private token: any;


    constructor(private http: HttpClient, private router: Router) { }

    public get currentUserToken(): string {
        return this.getToken();
    }

    signIn(user: User): Observable<JwtResponse>{
        return this.http.post<JwtResponse>(`${environment.apiUrl}/auth/signin`, user).pipe(tap(
            (res: JwtResponse) => {
                if (res.success){
                    this.saveToken(res.token, res.expiresIn)
                }
            }
        ))
    }

    logIn(email: string, password: string): Observable<JwtResponse>{
        return this.http.post<JwtResponse>(`${environment.apiUrl}/auth/login`, { email, password })
            .pipe(tap(
                (res: JwtResponse) => {
                    if (res.success){
                        this.saveToken(res.token, res.expiresIn)
                    }
                }
            ));
    }

    logout() {
        // remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
        this.router.navigate(['login']);
    }
    
    private saveToken(token: string, expiresIn: string): void {
        localStorage.setItem("ACCESS_TOKEN", token);
        localStorage.setItem("EXPIRES_IN", expiresIn);
        this.token = token;
    }

    private getToken(): string {
        if (!this.token){
            this.token = localStorage.getItem("ACCESS_TOKEN")
        }
        return this.token
    }
}