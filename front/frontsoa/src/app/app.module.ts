import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogementComponent } from './logement/logement.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterLogementComponent } from './ajoute-log/ajoute-log.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LogementComponent,
    RendezVousComponent,
    AjouterLogementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
