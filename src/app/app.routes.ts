import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { PageComponent } from './component/page/page.component';



const appRoutes: Routes = [
    { path : 'login' , component: LoginComponent },
    { path : '' , component : PageComponent },
    { path : '**' , component : PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot ( appRoutes, { useHash: true } );
