import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueb-login',
  templateUrl: './prueb-login.page.html',
  styleUrls: ['./prueb-login.page.scss'],
})
export class PruebLoginPage implements OnInit {

  nombre = new FormControl('');

  usuario = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  constructor() { }

  ngOnInit() {
  }
  //Se crean las funciones
  cambiarNombre(){
    this.usuario.controls.nombre.setValue('Ornitorrinco');
    
  }

  guardarDatos(){
    console.log(this.usuario.value); //aqui se guarda el FormGroup usuario(nombre, email)
  }
}
