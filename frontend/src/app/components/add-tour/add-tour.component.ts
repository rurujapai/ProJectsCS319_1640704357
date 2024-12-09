import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { TourService } from '../../services/tour.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { Tour } from '../../types/tour';
import { cities } from '../../constants/cities';

@Component({
  selector: 'app-add-tour',
  standalone: true,
  imports: [HttpClientModule,NgFor,ReactiveFormsModule,NgIf],
  templateUrl: './add-tour.component.html',
  styleUrl: './add-tour.component.css'
})
export class AddTourComponent {
  addTourForm: FormGroup;
  cities = cities;

  constructor(
    private tourService: TourService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.addTourForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      destinations: this.formBuilder.array([]),
    });
  }

  get destinations(): FormArray {
    return this.addTourForm.get('destinations') as FormArray;
  }

  addDestination(): void {
    const destinationForm = this.formBuilder.group({
      city: ['', Validators.required],
      days: [1, Validators.required],
      activities: [[]], // Optional array of activities
    });
    this.destinations.push(destinationForm);
  }

  removeDestination(index: number): void {
    this.destinations.removeAt(index);
  }

  onSubmit(): void {
    if (this.addTourForm.valid) {
      const formData = this.addTourForm.value as Tour;
      this.tourService.createTour(formData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}