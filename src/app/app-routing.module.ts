import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputTextboxComponent } from './utilities/input-textbox/input-textbox.component';


const routes: Routes = [
  {
      path: 'textbox',
      component: InputTextboxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
