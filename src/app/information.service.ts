import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.interface';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient) {

  }
  getCarsById(id){
  return  this.http.get('http://localhost:3000/cars/'+id);
  }
getCars(){
return  this.http.get('http://localhost:3000/cars');
}

postCars(cars:Car){
  console.log('working',)
return  this.http.post('http://localhost:3000/cars',cars)
}

deleteCars(id){
  console.log('working',)
return  this.http.delete('http://localhost:3000/cars/'+id);
}

editCars(id,car:Car){
  console.log('working',)
return  this.http.put('http://localhost:3000/cars/'+id,car);
}

}
