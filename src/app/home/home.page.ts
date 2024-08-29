import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: String;
  username: String;
  password: String;
  constructor(private alertController: AlertController) {
    this.message= 'Bienvenido SkeletonApp';
    this.username= '';
    this.password= '';
    
  }
  async validationLogin(){
    const usernameValidation: String='admin'
    const passwordValidation: String='Mat321'
    console.log("Ejecutando Validacion")
    if(this.username === usernameValidation && this.password === passwordValidation){
      const alert = await this.alertController.create({
        header: 'exito',
        message: 'Credencial Ingresadas Correctamente',
        buttons: ['Aceptar']

      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'error',
        message: 'Credenciales Incorrectas',
        buttons: ['Aceptar']

      });
      await alert.present();
    }
    
    
   
    
    

    
    
    
  }
  
 
  
  

}
