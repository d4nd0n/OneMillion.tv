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
import { ClipsComponent } from './pages/clips/clips.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ClipcontrollerComponent } from './components/clipcontroller/clipcontroller.component';
import { LikebarComponent } from './components/likebar/likebar.component';

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
    HeaderComponent,
    ClipcontrollerComponent,
    LikebarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
