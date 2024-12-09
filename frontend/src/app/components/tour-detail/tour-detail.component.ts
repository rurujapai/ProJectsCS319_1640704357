import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../../services/tour.service';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { NgFor, NgIf } from '@angular/common';
import { Tour } from '../../types/tour';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [DateFormatPipe,NgIf,NgFor],
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.css'
})
export class TourDetailComponent implements OnInit {
  tour: Tour | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');

    if (tourId) {
      this.tourService.getTourById(tourId).subscribe(
        (data) => {
          console.log(data)
          this.tour = data;
        },
        (error) => {
          alert('Failed to load tour details.');
          this.router.navigate(['/']); // Redirect to home if error occurs
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate back to the tours list
  }
}
