import { Component, EventEmitter, Output } from '@angular/core';
import { Logement } from '../logements';
import { LogementService } from '../services/logement.service';

@Component({
  selector: 'app-ajoute-log',
  templateUrl: './ajoute-log.component.html',
  styleUrls: ['./ajoute-log.component.css']
})
export class AjouterLogementComponent {
  newLogement: Logement = {
    reference: '',
    adresse: '',
    delegation: '',
    gouvernorat: '',
    type: '',
    description: '',
    prix: 0  // Ensure this is a number
  };

  constructor(private logementService: LogementService) {}

  // Handle form submission
  onSubmit(): void {
    if (this.newLogement.reference && this.newLogement.prix) {
      this.logementService.addLogement(this.newLogement).subscribe({
        next: (response) => {
          console.log('Logement added successfully:', response);
        },
        error: (err) => {
          console.error('Error adding logement:', err);
        }
      });
    }
  }
}
