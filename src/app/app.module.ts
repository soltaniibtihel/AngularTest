import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VehiculeComponent,
    NotFoundComponent,
    VehiculeDetailsComponent,
    AddVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
