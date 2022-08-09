import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VideoComponent } from './components/video/video.component';
import { TopUsersBarComponent } from './components/top-users-bar/top-users-bar.component';
import { TopClipsComponent } from './components/top-clips/top-clips.component';
import { ClipComponent } from './components/clip/clip.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClipsComponent } from './clips/clips.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    VideoComponent,
    NavBarComponent,
    TopUsersBarComponent,
    TopClipsComponent,
    ClipComponent,
    ShopComponent,
    ShopItemComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ClipsComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
