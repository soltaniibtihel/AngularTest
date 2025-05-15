import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent {
  
  vehiculeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehiculeService: VehiculeService,
    private router: Router
  ) {
    this.vehiculeForm = this.fb.group({
      Matricule: ['', Validators.required],
      Description: ['', [Validators.required, Validators.minLength(3)]],
      Marque: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
      Disponible: [true],
      nbrInteresse: [0]
    });
  }

  onSubmit() {
    if (this.vehiculeForm.valid) {
       this.vehiculeService.addVehicule(this.vehiculeForm.value).subscribe(() => {
        this.router.navigate(['/vehicules']);
      });
    }
  }
}
