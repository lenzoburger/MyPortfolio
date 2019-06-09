import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thankYou', component: ThankYouComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forChild(routes);
