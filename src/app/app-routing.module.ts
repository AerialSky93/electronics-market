import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputTextboxComponent } from './utilities/input-textbox/input-textbox.component';
import { AddressFormComponent } from './address-form/address-form.component';


const routes: Routes = [
  {
      path: 'textbox',
      component: InputTextboxComponent,
  },
  {
    path: 'addressform',
    component: AddressFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
