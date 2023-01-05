import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';

@Component({
  selector: 'app-c-accounts',
  templateUrl: './c-accounts.component.html',
  styleUrls: ['./c-accounts.component.scss']
})
export class CAccountsComponent implements OnInit {
  products: Product[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];
  
  submitted: boolean = false;


  statuses: any[] = [];

  constructor() { }
  
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  

}
