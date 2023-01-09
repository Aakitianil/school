import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
<<<<<<< Updated upstream
import { VTeacherComponent } from './v-teacher/v-teacher.component';
import { VNewadmissionComponent } from './v-newadmission/v-newadmission.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
         NotfoundComponent,
          VTeacherComponent, 
          VNewadmissionComponent,
       
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule
=======
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,ReactiveFormsModule
>>>>>>> Stashed changes
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
