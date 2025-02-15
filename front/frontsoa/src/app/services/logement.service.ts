import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement } from '../logements';

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  private apiUrl = 'http://localhost:8082/LogementRendezVous_Etudiant_war/api/logement/';  // Replace with your API endpoint

  constructor(private http: HttpClient,) {}

  // Get all logements
  getAllLogements(): Observable<Logement[]> {
    return this.http.get<Logement[]>(this.apiUrl+"getAll");
  }

  // Add a new logement
  addLogement(logement: Logement): Observable<Logement> {
    return this.http.post<Logement>(this.apiUrl+"add", logement);
  }

  // Optionally: Add methods for update and delete here
  // Method to delete a logement by reference
  deleteLogement(reference: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl+"delete"}/${reference}`);
  }
}
