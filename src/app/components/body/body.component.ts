import { Component} from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;
    frase: any ={
        mensaje: 'cualquier mensajes',
        autor: ' lo que sea'
    }

    personajes: string[] = ['per1','per2','per3']
}