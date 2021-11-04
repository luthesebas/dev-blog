import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () => import('./shared/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./shared/blog/blog.module').then(m => m.BlogModule)
  },
  {
     path: '',
     loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
