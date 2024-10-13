import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class GenericService<T> {
  private _headers = new HttpHeaders({
    Accept: "application/json",
  });
  private _baseUrl = environment.api;
  
  constructor(protected http: HttpClient) {}

  getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this._baseUrl}${endpoint}`, {
      headers: this._headers,
    });
  }

  getById(key: string, endpoint: string): Observable<T> {
    return this.http.post<T>(
      `${this._baseUrl}${endpoint}`,
      { key },
      { headers: this._headers }
    );
  }
}
