import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { TopUsersBarComponent } from './components/top-users-bar/top-users-bar.component';
import { TopClipsComponent } from './components/clips/top-clips/top-clips.component';
import { ClipComponent } from './components/clips/clip/clip.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClipsComponent } from './pages/clips/clips.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ClipcontrollerComponent } from './components/clips/clipcontroller/clipcontroller.component';
import { LikebarComponent } from './components/likebar/likebar.component';
import { UsertabComponent } from './components/user/usertab/usertab.component';
import { ArrowDownComponent } from './components/buttons/arrow-down/arrow-down.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserTopClipComponent } from './components/user/user-top-clip/user-top-clip.component';
import { ClipUploadComponent } from './components/clips/clip-upload/clip-upload.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
    VideoComponent,
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
    UsertabComponent,
    ArrowDownComponent,
    CarouselComponent,
    UserTopClipComponent,
    ClipUploadComponent,
    TestComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
