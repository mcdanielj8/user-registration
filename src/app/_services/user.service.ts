import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    
    getByEmail(email: string) {
        return this.http.get(`${config.apiUrl}/users/`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }
}