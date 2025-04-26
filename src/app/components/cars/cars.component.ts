import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car : Car = {} as Car;

  cars: Car[] = [
    {
      id: 1,
      name: 'Polo Classic',
      automaker: 'Volkswagen',
      price: 11.811,
      year: 2000
    }
  ]
}
