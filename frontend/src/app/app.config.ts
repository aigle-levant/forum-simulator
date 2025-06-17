import { provideRouter } from '@angular/router';
import { Home } from './pages/home/home';
import { Result } from './pages/result/result';

export const appRoutes = [
  { path: '', component: Home },
  { path: 'results', component: Result },
];

export const appConfig = [provideRouter(appRoutes)];
