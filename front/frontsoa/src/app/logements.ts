export interface Logement {
  reference: string;     // Unique reference for each logement
  adresse: string;       // Address of the logement
  delegation: string;    // Delegation (administrative district)
  gouvernorat: string;   // Governorate (region)
  type: string;          // Type of logement (e.g., apartment, house)
  description: string;   // A brief description of the logement
  prix: number;          // Price of the logement (should be a number)
}
