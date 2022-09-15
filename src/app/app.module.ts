import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponent } from './core/components/tv/video/video.component';
import { TopClipsComponent } from './core/components/clips/top-clips/top-clips.component';
import { ClipComponent } from './core/components/clips/clip/clip.component';
import { ShopComponent } from './core/components/shop/shop.component';
import { ShopItemComponent } from './core/components/shop-item/shop-item.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ClipsComponent } from './core/pages/clips/clips.component';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { CartComponent } from './core/pages/cart/cart.component';
import { HeaderComponent } from './core/components/headers/header/header.component';
import { ClipcontrollerComponent } from './core/components/clips/clipcontroller/clipcontroller.component';
import { LikebarComponent } from './core/components/likebar/likebar.component';
import { UsertabComponent } from './core/components/user/usertab/usertab.component';
import { ArrowDownComponent } from './core/components/buttons/arrow-down/arrow-down.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserTopClipComponent } from './core/components/user/user-top-clip/user-top-clip.component';
import { ClipUploadComponent } from './core/components/clips/clip-upload/clip-upload.component';
import { TestComponentComponent } from './core/components/test-component/test-component.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { HeaderCloseComponent } from './core/components/headers/header-close/header-close.component';
import { CommentsComponent } from './core/components/comments/comments.component';
import { ChatComponent } from './core/components/tv/chat/chat.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TestPageComponent } from './core/pages/test-page/test-page.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { HttpClientModule } from '@angular/common/http';
import { ClipService } from '../services/clip.service';
import { DragScrollModule } from 'ngx-drag-scroll';

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
    DragScrollModule,
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
    UserTopClipComponent,
    ClipUploadComponent,
    TestComponentComponent,
    HeaderCloseComponent,
    CommentsComponent,
    ChatComponent,
    TestPageComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
