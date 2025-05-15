import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/vehicules', pathMatch: 'full' },
  { path: 'vehicules', component: VehiculeComponent },
  { path: 'add-vehicule', component: AddVehiculeComponent },
  { path: 'vehicules/:id', component: VehiculeDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






