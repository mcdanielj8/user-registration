import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register';
// import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: RegisterComponent },

];

export const routing = RouterModule.forRoot(appRoutes);