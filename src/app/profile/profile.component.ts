import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  favorites = [
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg",
    "https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705665.jpg"
  ];
constructor(){}
 ngOnInit(): void {
   
 }
}
