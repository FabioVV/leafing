import { Routes } from '@angular/router';
import { AppLayout } from './layouts/app.layout';
import { authGuard } from './guards/auth/auth-guard';
import { Main } from './pages/main/main';

export const routes: Routes = [
    // { path: "auth", redirectTo: "/auth/login", pathMatch: "full" },
    // { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },

    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Main, canActivate: [authGuard], },
        ]
    }
];
