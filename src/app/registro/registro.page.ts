import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators, 
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    })
    }

  ngOnInit() {
  }
  //async = asincrona, ¿que es asincrona?
  async guardar(){
    var formulario = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Alert!!',
        subHeader: 'Mensaje importante',
        message: 'Debes llenar todos los campos',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }
    var usuario = {
      nombre : formulario.nombre,
      password : formulario.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
    console.log(localStorage);
    
    }
  }
