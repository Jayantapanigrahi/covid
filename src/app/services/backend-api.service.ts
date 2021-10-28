import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendApiService {

  constructor(private http: HttpClient) { }

  getAllDataByCountry(country) {
        return this.http.get(`https://disease.sh/v3/covid-19/countries/`+country);        
    }
}
