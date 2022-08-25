import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CitasmedicasComponent } from './citasmedicas/citasmedicas.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CitasmedicasComponent,
    HistoriaClinicaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
  
})
export class PagesModule { }
