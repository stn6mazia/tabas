import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent, InitPageComponent, TestsPageComponent } from '../pages';

export const routes: Routes = [
  {
    path: 'init',
    component: InitPageComponent
  },
  {
    path: 'exercises',
    component: TestsPageComponent
  },
  {
    path: 'form-exercise',
    component: FormPageComponent
  },
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    })
  ],
  exports: [
    RouterModule
  ]
})
export class TabasMainRoutingModule { }
