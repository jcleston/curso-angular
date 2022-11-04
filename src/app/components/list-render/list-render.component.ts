import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
    animals = [
        { name: 'Ana', type: 'Dog' },
        { name: 'João', type: 'Cat' },
        { name: 'Pedro', type: 'Dog' },
        { name: 'Maria', type: 'Cat' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
