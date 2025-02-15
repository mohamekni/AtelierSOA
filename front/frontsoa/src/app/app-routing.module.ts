import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementComponent } from './logement/logement.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AjouterLogementComponent } from './ajoute-log/ajoute-log.component';

const routes: Routes = [
  {path:'logement',component:LogementComponent},
  {path:'rendezvous',component:RendezVousComponent},
  {path:'add',component:AjouterLogementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
