import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: '',
        redirectTo: 'categorias',
        pathMatch: 'full',
      },
      {
        path: 'categorias',
        loadComponent: () => import('./paginas/categorias/categorias.component').then( m => m.CategoriasComponent)
      },
      {
        path: 'establecimientos/:id',
        loadComponent: () => import('./paginas/establecimientos/establecimientos.component').then( m => m.EstablecimientosComponent)
      },
];
