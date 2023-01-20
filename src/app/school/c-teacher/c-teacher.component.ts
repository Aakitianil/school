import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/demo/api/product';

@Component({
  selector: 'app-c-teacher',
  templateUrl: './c-teacher.component.html',
  styleUrls: ['./c-teacher.component.scss']
})
export class CTeacherComponent implements OnInit {
  regForm: any;

  constructor() { }
  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4)]),
      phoneno:new FormControl("",[Validators.required,Validators.minLength(4)]),
      speclization:new FormControl("",[Validators.required,Validators.minLength(4)]),
      payscale:new FormControl("",[Validators.required,Validators.minLength(4)]),
      address:new FormControl("",[Validators.required,Validators.minLength(4)]),
      aadharno:new FormControl("",[Validators.required,Validators.minLength(12)])
  })

}
}