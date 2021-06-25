import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;


    constructor(){
        this.titulo = "Hola mundo desde titulo";
        this.comentario = "Adios mundo desde comentario";
        this.year = 2050;

        console.log("Componente mi-componente cargado!!");
        console.log(this.titulo, this.comentario, this.year);
    }

}