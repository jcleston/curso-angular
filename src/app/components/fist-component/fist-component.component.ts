import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fist-component',
    templateUrl: './fist-component.component.html',
    styleUrls: ['./fist-component.component.css'],
})
export class FistComponentComponent implements OnInit {
    // Adicionando uma propriedade na classe
    name: string = 'Cleston';
    age: number = 40;
    job = 'Programador';
    hobbies = ['correr', 'jogar', 'ler'];

    constructor() {}

    ngOnInit(): void {}
}
