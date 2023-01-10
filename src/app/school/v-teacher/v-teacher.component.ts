
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-v-teacher',
  templateUrl: './v-teacher.component.html',
  styleUrls: ['./v-teacher.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class VTeacherComponent implements OnInit {
  regForm!:FormGroup

  constructor(){
    this.regForm = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4)]),
      phoneno:new FormControl("",[Validators.required,Validators.minLength(10)]),
      speclization:new FormControl("",[Validators.required,Validators.minLength(4)]),
      payscale:new FormControl("",[Validators.required,Validators.minLength(4)]),
      address:new FormControl("",[Validators.required,Validators.minLength(4)]),
      aadharno:new FormControl("",[Validators.required,Validators.minLength(12)])
    
    
    
  })
 
 
}
  ngOnInit(): void {
    
  }
}

