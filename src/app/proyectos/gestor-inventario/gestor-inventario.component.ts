import { Component, OnInit } from '@angular/core';
import { getImageUrls } from 'src/app/environments/environments';

@Component({
  selector: 'app-gestor-inventario',
  templateUrl: './gestor-inventario.component.html',
  styleUrls: ['./gestor-inventario.component.css'],
})
export class GestorInventarioComponent implements OnInit {
  imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
