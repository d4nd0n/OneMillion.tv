import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/tv/video/video.component';
import { TopClipsComponent } from './components/clips/top-clips/top-clips.component';
import { ClipComponent } from './components/clips/clip/clip.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClipsComponent } from './pages/clips/clips.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './components/headers/header/header.component';
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
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { HeaderCloseComponent } from './components/headers/header-close/header-close.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ChatComponent } from './components/tv/chat/chat.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { HttpClientModule } from '@angular/common/http';
import { ClipService } from './services/clip.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    FlexLayoutModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    BrowserModule,
    ScrollingModule,
    OverlayModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    VideoComponent,
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
    HeaderCloseComponent,
    CommentsComponent,
    ChatComponent,
    TestPageComponent,
  ],
  providers: [
    ClipService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
