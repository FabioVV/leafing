import { Component, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [ButtonModule, CommonModule, RouterModule],
    template: `
    <div style='' class="layout-wrapper">
        <div class="layout-main">
            <router-outlet></router-outlet>
        </div>
    </div> `
})
export class AppLayout {

    constructor(
        public renderer: Renderer2,
        public router: Router
    ) {
       
    }

    ngOnInit() {

    }

}