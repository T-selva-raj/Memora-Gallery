import { Component } from '@angular/core';
import { Router } from '@angular/router';
import social  from '../socialLinks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router: Router) { }
  
  navigate() {
    this.router.navigate(['login']);
  }
  navigateToSocialMedia(name: string) {
    switch (name) {
      case 'whatsApp':
        window.open(social.whataApp, '_blank');
        break;
      case 'instagram':
        window.open(social.instagram, '_blank');
        break;
      case 'linkedIn':
        window.open(social.linkedIn, '_blank');
        break;
      case 'gitHub':
        window.open(social.gitHub, '_blank');
        break;
    }
  }

}
