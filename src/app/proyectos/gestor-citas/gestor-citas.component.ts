import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-gestor-citas',
  templateUrl: './gestor-citas.component.html',
  styleUrls: ['./gestor-citas.component.css'],
})
export class GestorCitasComponent implements OnInit {
  imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
