import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    telefono: new FormControl('',[Validators.required]),
    mensaje: new FormControl('',[Validators.required])
  });


  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    
    if(this.form.value.nombre !=="" && this.form.value.correo !=="" && this.form.value.telefono !=="" && this.form.value.mensaje !==""){
      console.log(this.form.value)
      alert("!La información ha sido enviada con éxito!");
      this.form.reset();
      
    }else{
      alert("Los campos están incompletos");
      this.form.reset();
    }
  }

}
