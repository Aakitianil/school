import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';

import { SchoolRoutingModule } from './school-routing.module';
import { VAccountsComponent } from './v-accounts/v-accounts.component';
import { CAccountsComponent } from './c-accounts/c-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VTimetableComponent } from './v-timetable/v-timetable.component';
<<<<<<< Updated upstream
import { ReactiveFormsModule } from '@angular/forms';
=======
import { VTeacherComponent } from './v-teacher/v-teacher.component';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
    VAccountsComponent,
    CAccountsComponent,
    VTimetableComponent,
    VTeacherComponent,
   
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        ReactiveFormsModule,
<<<<<<< Updated upstream
        FormsModule

=======
>>>>>>> Stashed changes
  ]
})
export class SchoolModule { }
