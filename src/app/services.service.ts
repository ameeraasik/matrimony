import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) {
}

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/profile-details.json");
  }

  public getImgJSON(): Observable<any> {
    return this.http.get("./assets/data/images.json");
  }
}
