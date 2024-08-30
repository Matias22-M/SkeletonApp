import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  Telefono: String = '';


  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const user = navigation.extras.state['user'];
      if (user) {
        this.nombre = user.Nombre || '';
        this.apellido = user.Apellido || '';
        this.correo = user.correo || '';
        this.Telefono= user.Telefono || '';
      }
    }
  }
}
