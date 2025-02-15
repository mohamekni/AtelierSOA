import { Component, OnInit } from '@angular/core';
import { LogementService } from '../services/logement.service';
import { Logement } from '../logements';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  logements: Logement[] = []; // Declare the array to store logement data

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.fetchLogements();
  }

  // Fetch logement data from the service
  fetchLogements(): void {
    this.logementService.getAllLogements().subscribe({
      next: (data) => {
        this.logements = data;  // Store the fetched data in logements array
      },
      error: (err) => {
        console.error('Error fetching logements:', err);
      }
    });
  }

  // Method to delete logement by reference
  deleteLogement(reference: string): void {
    this.logementService.deleteLogement(reference).subscribe({
      next: () => {
        // Remove the deleted logement from the local array
        this.logements = this.logements.filter(logement => logement.reference !== reference);
        console.log('Logement deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting logement:', err);
      }
    });
  }
}
