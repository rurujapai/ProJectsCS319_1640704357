import { Component, OnInit } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { DateFormatPipe } from "../../pipes/date-format.pipe";
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Tour } from '../../types/tour';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [DateFormatPipe,NgFor,NgIf],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit(): void {
    this.tourService.getTours().subscribe((data: Tour[]) => {
      this.tours = data;
    });
  }

  viewTourDetails(tourId: string): void {
    this.router.navigate([`/tour-detail/${tourId}`]);
  }

  onEditTour(tourId: string): void {
    this.router.navigate([`/edit-tour/${tourId}`]);
  }

  onDeleteTour(tourId: string): void {
    this.tourService.deleteTour(tourId).subscribe(() => {
      this.tours = this.tours.filter(t => t.id !== tourId);
    });
  }
}
