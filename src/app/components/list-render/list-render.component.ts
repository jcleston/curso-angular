import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
    animals: Animal[] = [
        { name: 'Ana', type: 'Dog', age: 10 },
        { name: 'João', type: 'Cat', age: 3 },
        { name: 'Pedro', type: 'Dog', age: 5 },
        { name: 'Maria', type: 'Cat', age: 6 },
    ];

    animalDetails = '';

    constructor() {}

    ngOnInit(): void {}

    showAge(animal: Animal) {
        this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
    }
}
