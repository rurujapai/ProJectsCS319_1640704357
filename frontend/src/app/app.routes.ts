import { Routes } from '@angular/router';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { TourHistoryComponent } from './components/tour-history/tour-history.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: TourListComponent },
    { path: 'tour-detail/:id', component: TourDetailComponent },
    { path: 'add-tour', component: AddTourComponent,canActivate: [authGuard] },
    { path: 'edit-tour/:id', component: EditTourComponent,canActivate: [authGuard] },
    { path: 'tour-history', component: TourHistoryComponent },
    { path: 'login', component: LoginComponent },
];
