import {Component} from '@angular/core';//esta es la sintasis correcta de angular core

@Component({//decorador caratecristicas de clase
    selector:'fruta',
  //  templateUrl:'./fruta.component.html', seria plantilla aparte
    template:`
        <h2>{{nombre_componente}}</h2>
        <p>{{listado_fruta}}</p>
    `
})

export class FrutaComponent{
    //propiedades
    public nombre_componente= 'Componente fruta';
    public listado_fruta='naranja,manzana,pera y sandia';

    //vaiables
    public nombre:string;
    public edad:number;
    public mayoredad:boolean=false;
    public trabajos:Array<any>=['carpintero',44,'fontanero'];
    comodin:any;
    constructor(){
        this.nombre = 'jesus';
    }
 
    // ngOnInit(){//funcion que inicializa desde el constructor
    //     //variables y alcanza
    //     var uno=8;
    //         //let actua desntro de bloque
    //         //var es de ambito global
    // }
}