import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  valores:any = [
    {
      titulo:'Compromiso',
      contenido:'Vivimos nuestro trabajo con pasión, intentando siempre exceder las expectativas de nuestros clientes.'
    },
    {
      titulo:'Lealtad',
      contenido:'Actuamos siempre fieles a la empresa, a nuestros clientes y colaboradores.'
    },
    {
      titulo:'Honestidad',
      contenido:'Defendemos la verdad y la coherencia con nuestro equipo de trabajo, clientes y socios comerciales.'
    },
    {
      titulo:'Respeto',
      contenido:'Nos comportamos con respeto y humildad para garantizar día a día un excelente ambiente en el trabajo.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
