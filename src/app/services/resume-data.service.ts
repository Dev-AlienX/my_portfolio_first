import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  public aboutData: any = [];
  resumeUrl = 'assets/json/resume.json';
  constructor(private http: HttpClient) {}

  public getAllData() {
    return this.http.get(this.resumeUrl);
  }

  
  // getAboutData() {
  //   return this.http.get(this.mobileDataUrl);
  // }
}
