import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User { id:number; name:string; email:string; }
@Injectable({providedIn:'root'})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsers(fail = false): Observable<User[]> { return this.http.get<User[]>(fail ? this.url + '-missing' : this.url); }
  create(user: Omit<User,'id'>): Observable<User> { return this.http.post<User>(this.url, user); }
  update(user: User): Observable<User> { return this.http.put<User>(`${this.url}/${user.id}`, user); }
  remove(id: number): Observable<object> { return this.http.delete(`${this.url}/${id}`); }
}
