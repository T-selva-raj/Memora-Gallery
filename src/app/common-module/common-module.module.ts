import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCardComponent } from './common-card/common-card.component';



@NgModule({
  declarations: [
    CommonCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonCardComponent
  ]
})
export class CommonModuleModule { }
