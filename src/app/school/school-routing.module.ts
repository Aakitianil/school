import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VAccountsComponent } from './v-accounts/v-accounts.component';

const routes: Routes = [
  {
    path: 'accounts', component: VAccountsComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
