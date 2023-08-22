import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Aca las validaciones se controlan mediante un FormGroup.
  /*formularioLogin = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
    contrasenia: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
  })*/


  //Aca se controlan las validaciones mediante arrays gracias al fb(FormBuilder) definido en el constructor.
  formularioLogin = this.fb.group({
    nombre: ['',[Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
    contrasenia: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder, private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  //Crear funciones...
  goToHome(){
    const userValue = this.formularioLogin.get('nombre')?.value;
    this.navCtrl.navigateRoot(`/home/${userValue}`);
  }
  guardarDatos(){
    console.log(this.formularioLogin.value);
  }
  

}
