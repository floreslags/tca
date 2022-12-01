import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path:'',children:[
      {path:'inicio',component:InicioComponent},
      {path:'nosotros',component:NosotrosComponent},
      {path:'contacto',component:ContactoComponent},
      {path:'',redirectTo:'inicio',pathMatch:'full'},
      {path:'**',redirectTo:'inicio',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
