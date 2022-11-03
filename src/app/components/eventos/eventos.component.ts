import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
    mostra: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    mostraMessage(): void {
        this.mostra = !this.mostra; // toggle
    }
}
