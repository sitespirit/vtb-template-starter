import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItineraryResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve():Promise<any> {
    return this.http.get('../../../assets/json/stub-boh-birds.json').toPromise();
  }
}
