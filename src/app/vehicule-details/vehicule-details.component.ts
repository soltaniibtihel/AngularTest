import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from '../models/vehicule';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent {
  vehicule: Vehicule | undefined;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehiculeService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getVehicule(id).subscribe(
      (data) => this.vehicule = data,
      (error) => console.error('Error loading vehicle', error)
    );
  }

}
