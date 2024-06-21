import { Component, OnInit } from '@angular/core';
import { getImageUrls } from 'src/app/environments/environments';

@Component({
  selector: 'app-glucontrol',
  templateUrl: './glucontrol.component.html',
  styleUrls: ['./glucontrol.component.css'],
})
export class GlucontrolComponent implements OnInit {
  imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
