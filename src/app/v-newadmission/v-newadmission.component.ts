import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-v-newadmission',
  templateUrl: './v-newadmission.component.html',
  styleUrls: ['./v-newadmission.component.scss']
})
export class VNewadmissionComponent implements OnInit {
  myform!: FormGroup;

  constructor() {
    this.myform= new FormGroup(
      {
        Name:new FormControl("",[Validators.required]),
        AdmissionNo:new FormControl("",[Validators.required]),
        Address:new FormControl("",[Validators.required]),
        Gendername:new FormControl("",[Validators.required]),
        Gender:new FormControl("",[Validators.required]),
        RollNo:new FormControl("",[Validators.required]),
        ContactNo:new FormControl("",[Validators.required]),
        BloodGroup:new FormControl("",[Validators.required]),
        Father:new FormControl("",[Validators.required]),
        Mother:new FormControl("",[Validators.required]),
        DOB:new FormControl("",[Validators.required]),
        DOA:new FormControl("",[Validators.required]),
        AdharNo:new FormControl("",[Validators.required]),
        PreviousSchool:new FormControl("",[Validators.required]),
        

      }
    )
   }


  ngOnInit(): void {
  }

}
