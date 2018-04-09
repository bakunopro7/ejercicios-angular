import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutaComponent} from './fruta/fruta.component';

//coniguracion de rutas 
const appRoutes: Routes=[
    {path:'',component:EmpleadoComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'**',component:EmpleadoComponent}
];
//declaracion de array vacio
export const appRoutingProviders: any[]=[];

//en esta variable se carga las rutas para despues registrarlas en app.module
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);




