import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from "../../pipes/date-format.pipe";
import { NgFor, NgIf } from '@angular/common';
import { TourService } from '../../services/tour.service';
import { Tour } from '../../types/tour';

@Component({
  selector: 'app-tour-history',
  standalone: true,
  imports: [DateFormatPipe,NgFor,NgIf],
  templateUrl: './tour-history.component.html',
  styleUrl: './tour-history.component.css'
})
export class TourHistoryComponent implements OnInit {
  completedTours: any[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.tourService.getTours().subscribe((data) => {
      this.completedTours = data.filter(tour => tour.status === 'completed');
    });
  }
}
