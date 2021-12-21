import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems = [
    {
      text: 'OUR STORY',
      link: '',
    },
    {
      text: 'EUGENE MENU',
      link: '',
    },
    {
      text: 'GIFT CARDS',
      link: '',
    },
    {
      text: 'GALLERY',
      link: '',
    },
    {
      text: 'PRESS',
      link: '',
    },
    {
      text: 'CONTACT',
      link: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
