import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  servicios = [
    {
      titulo:'Aeropuertos',
      icono:'fa-sharp fa-solid fa-plane-departure text-xl text-indigo-700',
      features:['León (BJX)','Querétaro (QRO)','Ciudad de México (CDMX)']
    },
    {
      titulo:'Eventos privados y destinos de alojamiento',
      icono:'fa-solid fa-magnifying-glass-location text-xl text-indigo-700',
      features:['Hoteles','Haciendas (bodas)']
    },
    {
      titulo:'Recorridos turísticos',
      icono:'fa-solid fa-signs-post text-xl text-indigo-700',
      features:['Ruta de la independencia']
    },
  ]

  compromiseCards=[
    {
      titulo:'Puntualidad',
      icono:'fa-solid fa-user-clock text-2xl text-indigo-700',
      text:'Llega a tu destino SIEMPRE A TIEMPO.'
    },
    {
      titulo:'Seguridad',
      icono:'fa-solid fa-user-check text-2xl text-indigo-700',
      text:'No hay nada mejor que viajar SEGURO.'
    },
    {
      titulo:'Comodidad',
      icono:'fa-solid fa-face-smile text-2xl text-indigo-700',
      text:'El ambiente 100% confortable de nuestros vehículos habla por sí solo.'
    },
    {
      titulo:'Garantía de servicio',
      icono:'fa-solid fa-circle-check text-2xl text-indigo-700',
      text:'Disponible las 24 Hrs, relación precio-calidad.'
    },

  ]

  autos = [
    {
      image:'/assets/sedan.jpg',
      title:'SEDAN',
      features:'Capacidad de 2 - 3 pasajeros'
    },
    {
      image:'/assets/suburban.jpg',
      title:'SUBURBAN',
      features:'Capacidad de 4 - 7 pasajeros'
    },
    {
      image:'/assets/van.jpg',
      title:'VAN',
      features:'Capacidad de 8 - 11 pasajeros'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
