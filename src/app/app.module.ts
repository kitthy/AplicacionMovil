import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { GatosService } from './services/gatos.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';





//rutas
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';

//para usar formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { GatoComponent } from './components/gato/gato.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [ //son componentes que se van a usar en todo el sistema
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GatosComponent,
    GatoComponent,
    LoginComponent,
    VoluntariosComponent,
    AdopcionesComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING, //es para instaciar las rutas del archivo
    ReactiveFormsModule, //para formularios
    FormsModule //es para usar formularios
  ],
  providers: [ //son servicios, crear, actualizar, etc. TypeScrip
    GatosService, 
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//para crear componentes usamos el comando = ng g c componentes/nombreComponente/
//g = generar
//c = componente

//para crear servicios usamos el comando = ng g s servicios/nombreServicio/
//s = servicio 

