import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { vtbDataTransformer } from '@sitespirit/vtb-transformer';

@Injectable()
export class ItineraryResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve():Promise<any> {
    return this.http.get('../../../assets/json/stub.json').toPromise().then((vtbObj) => {
      return vtbDataTransformer.transform(vtbObj);
    });
  }
}
