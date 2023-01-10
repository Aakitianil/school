import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { VNewadmissionComponent } from '../v-newadmission/v-newadmission.component';
import { VAccountsComponent } from './v-accounts/v-accounts.component';
import { VTeacherComponent } from './v-teacher/v-teacher.component';

import { VTimetableComponent } from './v-timetable/v-timetable.component';


const routes: Routes = [
  {
    path: 'accounts', component: VAccountsComponent, pathMatch: 'full'
  },
  {
    path: 'timetable', component: VTimetableComponent, pathMatch: 'full'

  },
  
{
    path: 'newadmisson',component: VNewadmissionComponent, pathMatch: 'full'
},
{
    path:"teacher",component:VTeacherComponent, pathMatch:'full'

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }