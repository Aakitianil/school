import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from 'src/app/school/Model/teacher';
import { Product } from '../api/product';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 
  

  constructor(private http:HttpClient) { }
  getProductsSmall() {
    return this.http.get<any>('assets/demo/data/products-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
}
  getTeacher() {
    return this.http.get<any>('assets/demo/data/teacher.json')
        .toPromise()
        .then(res => res.Teacher as Teacher[])
        .then(data => data);
}
getProductsMixed() {
  return this.http.get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
}

getProductsWithOrdersSmall() {
  return this.http.get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
}
  
}
