// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projeler', component: ProjectsComponent },
  { path: 'hakkinda', component: AboutComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
