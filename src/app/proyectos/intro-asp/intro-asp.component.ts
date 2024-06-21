import { Component, OnInit } from '@angular/core';
import { getImageUrls } from 'src/app/environments/environments';

@Component({
  selector: 'app-intro-asp',
  templateUrl: './intro-asp.component.html',
  styleUrls: ['./intro-asp.component.css'],
})
export class IntroASPComponent implements OnInit {
  imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
