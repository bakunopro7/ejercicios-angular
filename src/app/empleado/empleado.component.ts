import {Component} from '@angular/core';

//propiedades del componente "decorador"
@Component({
    selector:'empleado-tag',//selector
    templateUrl:'./empleado.component.html'

})

export class EmpleadoComponent{
    public titulo='titulo empleado';
}