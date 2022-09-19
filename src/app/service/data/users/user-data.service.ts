import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Users {
  constructor(public firstName: string, public lastName: string, public email: string, public loginId: string, public password: string, public contactNumber: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  serviceUrl: string = "ec2-34-221-48-114.us-west-2.compute.amazonaws.com";

  constructor(private http: HttpClient) { }

  register(user: Users) {
    return this.http.post(`http://${this.serviceUrl}:8080/tweets/register`, user)
  }

  getUsers() {
    return this.http.get<Users[]>(`http://${this.serviceUrl}:8080/tweets/users/all`)
  }

  getUser(loginId: String) {
    return this.http.get<Users>(`http://${this.serviceUrl}:8080/tweets/user/${loginId}`)
  }

  updatePassword(loginId: String, user: Users) {
    return this.http.put(`http://${this.serviceUrl}:8080/tweets/${loginId}/forgot`, user);
  }

  searchByRegex(str : string){
    return this.http.get<Users[]>(`http://${this.serviceUrl}:8080/tweets/user/search/${str}`)
  }
  authenticateUser(loginId : string, password:string){
    return this.http.get(`http://${this.serviceUrl}:8080/authenticate/${loginId}/${password}`)
  }
}
