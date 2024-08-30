import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message: string;
  username: string;
  password: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {
    this.message = 'Bienvenido!'
    this.username = 'username';
    this.password = 'password';
  }

  ngOnInit() {
  }

  validateLogin(){
    console.log("ejecutando validacion")

    const usernameValidation: string = 'admin';
    const passwordValidation: string = '1234';

   if( this.username.length >= 3 && this.username.length <= 8 && this.password.length === 4      
    ){
      this.generateMessage('Login correcto', 'success');
      const user ={
        Nombre : 'Matias',
        Apellido : 'Maldonado',
        correo : 'mat.maldonados@duocuc.cl',
        Telefono: '56956565'


      }
      let extras: NavigationExtras = {
        state: { user: user }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.generateMessage('Login fallido', 'danger');
    }
  }

  async generateMessage(message: string, color: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

}