import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '9crgwiATmDGi6WAx7V8Pcr29rfAvcibqYFLJKPQC';
  public getNews(){
    return this.httpClient.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.API_KEY}`);
  }
  constructor(private httpClient: HttpClient) { }
}
