import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
    contrasenia: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
  })

  constructor() { }

  ngOnInit() {
  }
  //Crear funciones...
  guardarDatos(){
    console.log(this.formularioLogin.value); //aqui se guarda el FormGroup usuario(nombre, email)
  }
  

}
