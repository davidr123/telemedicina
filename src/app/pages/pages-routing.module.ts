import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasmedicasComponent } from './citasmedicas/citasmedicas.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {path:'', component:PagesComponent ,
    children:[

        {path:'home', component:HomeComponent},
        {path:'citas_medicas', component:CitasmedicasComponent},
        {path:'historia_clinica', component:HistoriaClinicaComponent},


    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
