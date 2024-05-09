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

  register(name: string, surname: string, email: string, telephone: string, password: string, language: string, role: string) {
    const urlRegister = `http://localhost:3000/register?email=${email}&password=${password}&language=ES&role=${role}&name=${name}&surname=${surname}&telephoneNumber=${telephone}&caregiver=null`
    return this.http.put(urlRegister, null)
  }
}
