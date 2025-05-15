import { Component } from '@angular/core';
import { Vehicule } from '../models/vehicule';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent {
  vehicles: Vehicule[] = [];

  constructor(private vehicleService: VehiculeService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicules().subscribe(
      (data) => this.vehicles = data,
      (error) => console.error('Error loading vehicles', error)
    );
  }
  deleteVehicule(id: number): void {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
    this.vehicleService.deleteVehicule(id).subscribe(
      () => {
        this.vehicles = this.vehicles.filter(v => v.id !== id);
      },
      (error) => console.error('Error deleting vehicle', error)
    );
  }
}
}
