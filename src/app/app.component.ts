import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'calendar-outline',
      name: 'Agendar Servicio', 
      redirecTo: '/Agregar-servicio'
    },

    {
      icon: 'help-circle-outline', 
      name: 'Cómo Funciona', 
      redirecTo: '/agendar'
    },

    {
      icon: 'people-outline', 
      name: 'Quienes Somos', 
      redirecTo: '/quienes'
    },
   
  ]

}
