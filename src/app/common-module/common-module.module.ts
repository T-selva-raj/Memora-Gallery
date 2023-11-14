import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCardComponent } from './common-card/common-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CommonCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    CommonCardComponent
  ]
})
export class CommonModuleModule { }
