import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.css']
})
export class CommonCardComponent {
  @Input() userName!: string;
  @Input() email !: string;
  
  constructor(){}
  
}
