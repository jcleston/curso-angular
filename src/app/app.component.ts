import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    userName = 'Cleston Silva';

    userData = {
        email: 'a@a.com',
        role: 'admin',
    };

    hobbie = 'estudar';

    title = 'curso-angular';
}
