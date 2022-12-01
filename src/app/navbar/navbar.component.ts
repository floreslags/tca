import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu:any = [
    {titulo:'Inicio',ruta:'/inicio'},
    {titulo:'Nosotros',ruta:'/nosotros'},
    {titulo:'Contacto',ruta:'/contacto'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
