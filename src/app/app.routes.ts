import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'assesment-modal',
    loadComponent: () =>
      import('./pages/assesment-modal/assesment-modal.page').then(
        (m) => m.AssesmentModalPage
      ),
  },
  {
    path: 'asset-register',
    loadComponent: () =>
      import('./pages/asset-register/asset-register.page').then(
        (m) => m.AssetRegisterPage
      ),
  },  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.page').then( m => m.TestPage)
  },
  {
    path: 'asset-registration',
    loadComponent: () => import('./pages/asset-registration/asset-registration.page').then( m => m.AssetRegistrationPage)
  },

];
