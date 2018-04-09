import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutaComponent} from './fruta/fruta.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
//coniguracion de rutas 
const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'pagina-pricipal',component:HomeComponent},
    {path:'contacto',component:ContactoComponent},

    {path:'**',component:HomeComponent}//este es la ruta cinado falla
];
//declaracion de array vacio
export const appRoutingProviders: any[]=[];

//en esta variable se carga las rutas para despues registrarlas en app.module
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);




