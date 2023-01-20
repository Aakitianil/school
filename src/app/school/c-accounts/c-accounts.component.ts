import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/demo/api/product';

@Component({
  selector: 'app-c-accounts',
  templateUrl: './c-accounts.component.html',
  styleUrls: ['./c-accounts.component.scss']
})
export class CAccountsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  products: Product[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];
  
  submitted: boolean = false;


  statuses: any[] = [];
}