import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

//Sign in을 위해
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserprofileComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];