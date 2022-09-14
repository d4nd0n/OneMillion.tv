import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { ClipsComponent } from './core/pages/clips/clips.component';
import { CartComponent } from './core/pages/cart/cart.component';
import { TestPageComponent } from './core/pages/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clips',
    component: ClipsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
