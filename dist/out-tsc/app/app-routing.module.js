import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClipsComponent } from './pages/clips/clips.component';
import { CartComponent } from './pages/cart/cart.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map