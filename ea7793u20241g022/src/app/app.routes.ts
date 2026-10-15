import {Routes} from '@angular/router';
import {Home} from './shared/presentation/views/home/home';

const add = () => import('./shared/presentation/views/new-reservation/new-reservation').then(m => m.NewReservation);
const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);
const baseTitle = 'TrailQuest Adventure Camps';

/**
 * Root route configuration that composes bounded-context routes.
 */

// Public Routes version to use until IAM is implemented
export const routes: Routes = [
  { path: 'home',     component:      Home,                         title: `${baseTitle} - Home`  },
  { path: 'add',      loadComponent:  add,                          title: `${baseTitle} - New Reservation`  },
  { path: '',         redirectTo:     '/home', pathMatch: 'full'  },
  { path: '**',       loadComponent:  pageNotFound,                 title: `${baseTitle} - Page Not Found`  },
];
