import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile = new FormGroup({
    UserName: new FormControl(''),
    DOB: new FormControl(''),
    Email: new FormControl(''),
    Bio: new FormControl(''),
    Instagram: new FormControl(''),
    LinkedIn: new FormControl(''),
  });
  initialData: any;
  isEditable = false;  //to make the controll readOnly
  disableEditButton = false;
  constructor() { 
    
  }
  ngOnInit(): void {
    this.initialData = {
      UserName: 'Sample_user@24',
      DOB: '31/12/1999',
      Email: 'example@gmail.com',
      Bio: 'I am a Deveoper \n I am an Engineer \n I am a student ! \n 🤣🤣🤣🤣🤣',
      Instagram: 'https://www.google.com',
      LinkedIn: 'https://www.linkedin.com'
    };
    this.profile.setValue(this.initialData);
  }
  getNumberOfLines(): number {
    const bioControl = this.profile.get('Bio');
    if (bioControl) {
      const bioValue = bioControl.value as string;
      return (bioValue.match(/\n/g) || []).length + 1;
    }
    return 0;
  }
  editProfileDetails() {
    this.isEditable = !this.isEditable;
    this.disableEditButton = true;
  }
  discardChanges() {
    this.disableEditButton = false;
    this.profile.setValue(this.initialData);
}
}
