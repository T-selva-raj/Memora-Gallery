import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  profileImg: string = 'https://wallpapers.com/images/hd/albert-einstein-pictures-3185-x-3120-m1xto7x0i9py34b2.jpg';
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImg = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log('Image submitted');
  }
}
