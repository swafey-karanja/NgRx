import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then((module) => module.CartComponent),
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then((module) => module.ProductsComponent),
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./components/counter/counter.component').then((module) => module.CounterComponent),
  }
];
