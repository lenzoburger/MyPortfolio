import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PreventUnsavedChanges } from './_gaurds/prevent-unsaved-changes.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [PreventUnsavedChanges] },
  { path: 'thankYou', component: ThankYouComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forChild(routes);
