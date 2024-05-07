import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const url = `http://localhost:3000/login?email=${username}&password=${password}`
    return this.http.post(url, null)
  }

  getUser(uid: string) {
    const urlGet = `http://localhost:3000/user?uuid=${uid}`
    return this.http.get(urlGet)

  }
}
