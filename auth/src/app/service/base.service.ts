import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

interface ITWithID {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends ITWithID> {

  constructor(
    protected http: HttpClient,
    protected config: ConfigService,
    protected endPoint: string,
  ) { }

  read(id?: number): Observable<T | T[]> {
    return this.http.get<T | T[]>(
      `${this.config.apiUrl}${this.endPoint}/${id || ''}`
    );
  }

  query(queryString: string): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.config.apiUrl}${this.endPoint}?${queryString}`
    );
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.config.apiUrl}${this.endPoint}`,
      entity
    );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.config.apiUrl}${this.endPoint}/${entity.id}`,
      entity
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.config.apiUrl}${this.endPoint}/${id}`
    );
  }

}
