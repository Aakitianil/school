import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/demo/api/product';

@Component({
  selector: 'app-c-teacher',
  templateUrl: './c-teacher.component.html',
  styleUrls: ['./c-teacher.component.scss']
})
export class CTeacherComponent implements OnInit {
  products: Product[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];
  
  submitted: boolean = false;


  statuses: any[] = [];
  regForm: any;

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4)]),
  })

}
}
