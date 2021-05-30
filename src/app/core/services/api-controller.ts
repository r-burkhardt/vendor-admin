import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BaseURL} from "@app/core/constants/url.const";

@Injectable({
  providedIn: 'root'
})
export class ApiController {

  constructor(private http: HttpClient) { }

  async status(): Promise<any> {
    const httpParams = new HttpParams().append('verify', '')
    return await this.http
      .get<any>(`${BaseURL.DEV}${BaseURL.API_VERSION}/utils/status/?verify`, )
      .toPromise();
  }

  async get(): Promise<any> {
    return await this.http.get('').toPromise();
  }

  async post(body: JSON): Promise<any> {
    return await this.http.post('', body).toPromise();
  }

  async put(body: JSON): Promise<any> {
    return await this.http.put('', body).toPromise();
  }

  async delete(): Promise<any> {
    return await this.http.delete('').toPromise();
  }
}
