import {Component} from '@angular/core';
import {Empleado} from './empleado';//clase cargada
//propiedades del componente "decorador"
@Component({
    selector:'empleado-tag',//selector
    templateUrl:'./empleado.component.html'

})

export class EmpleadoComponent{
    public titulo='titulo empleado';
    public empleado:Empleado;

    ngOnInit(){
            
    }
}