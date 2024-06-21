import { Component, OnInit } from '@angular/core';
import { getImageUrls } from 'src/app/environments/environments';

@Component({
  selector: 'app-gestor-tareas',
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css'],
})
export class GestorTareasComponent implements OnInit {
  imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
