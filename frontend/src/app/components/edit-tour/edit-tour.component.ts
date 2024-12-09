import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../../services/tour.service';
import { formatDate, NgFor, NgForOf, NgIf } from '@angular/common';
import { Destination, Tour } from '../../types/tour';
import { cities } from '../../constants/cities';

@Component({
  selector: 'app-edit-tour',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,NgFor,NgForOf],
  templateUrl: './edit-tour.component.html',
  styleUrl: './edit-tour.component.css'
})
export class EditTourComponent implements OnInit {
  editTourForm: FormGroup;
  cities = cities; // Example cities
  tourId: string | null = null;
  dateFormat = "yyyy-MM-dd";
  language = "en";
  constructor(
    private fb: FormBuilder,
    private tourService: TourService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editTourForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [this.formatFormDate(new Date()), Validators.required],
      endDate: [this.formatFormDate(new Date()), Validators.required],
      destinations: this.fb.array([]), // Initialize as empty array
    });
  }

  ngOnInit(): void {
    this.tourId = this.route.snapshot.paramMap.get('id');
    if (this.tourId) {
      this.tourService.getTourById(this.tourId).subscribe((tour: Tour) => {
        console.log(tour)
        this.populateForm(tour);
      });
    }
  }

  populateForm(tour: Tour): void {
    this.editTourForm.patchValue({
      name: tour.name,
      description: tour.description,
      startDate: this.formatFormDate(tour.startDate),
      endDate: this.formatFormDate(tour.endDate),
    });

    // Populate destinations
    const destinationsArray = this.editTourForm.get('destinations') as FormArray;
    tour.destinations.forEach((destination) => {
      destinationsArray.push(
        this.fb.group({
          city: [destination.city, Validators.required],
          activities: [destination.activities?.join(', '), Validators.required], // Convert array to comma-separated string
          days: [destination.days, Validators.required],
          index: this.cities.findIndex(
            (city) => city === destination.city
          )
        })
      );
    });
    console.log(destinationsArray)
  }

  formatFormDate(date: Date) {
    return formatDate(date, this.dateFormat, this.language);
  }

  get destinations(): FormArray {
    return this.editTourForm.get('destinations') as FormArray;
  }

  addDestination(): void {
    this.destinations.push(
      this.fb.group({
        city: ['', Validators.required],
        activities: ['', Validators.required],
        days: ['', Validators.required],
      })
    );
  }

  removeDestination(index: number): void {
    this.destinations.removeAt(index);
  }

  onSubmit(): void {
    if (this.editTourForm.valid && this.tourId) {
      const formValue = this.editTourForm.value;
      formValue.destinations = formValue.destinations.map((dest: any) => ({
        ...dest,
        activities: dest.activities.split(',').map((activity: string) => activity.trim()), // Convert string back to array
      }));

      this.tourService.updateTour(this.tourId, formValue).subscribe(() => {
        alert('Tour updated successfully!');
        this.router.navigate(['/']);
      });
    }
  }
}