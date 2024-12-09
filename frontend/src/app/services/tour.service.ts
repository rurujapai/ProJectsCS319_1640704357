import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tour } from '../types/tour';
import { Wrapper } from '../types/wrapper';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl = 'http://localhost:5000/api/tours';

  constructor(private http: HttpClient) {}

  getTours(): Observable<Tour[]> {
    return this.http.get<Wrapper<Tour[]>>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }

  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Wrapper<Tour>>(this.apiUrl, tour).pipe(
      map((response) => response.data)
    );
  }

  getTourById(id: string): Observable<Tour> {
    return this.http.get<Wrapper<Tour>>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response.data)
    );
  }

  updateTour(id: string, tour: Tour): Observable<Tour> {
    return this.http.put<Wrapper<Tour>>(`${this.apiUrl}/${id}`, tour).pipe(
      map((response) => response.data)
    );
  }

  deleteTour(id: string): Observable<string> {
    return this.http.delete<Wrapper<any>>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response.message)
    );
  }
  
  
}
