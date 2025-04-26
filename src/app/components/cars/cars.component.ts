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

  isUpdate : boolean = false;
  idCount : number = 2;

  cars: Car[] = [
    {
      id: 1,
      name: 'Polo Classic',
      automaker: 'Volkswagen',
      price: 11.811,
      year: 2000
    }
  ];

  saveCar(){
    if(!this.isUpdate){
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }

    this.car = {} as Car;
    this.isUpdate = false;
  }

  update(updateCar:Car){
    this.car = updateCar;
    this.isUpdate = true;
  }

  remove(removeCar:Car){
    this.cars = this.cars.filter( c => c!== removeCar);
  }
}
