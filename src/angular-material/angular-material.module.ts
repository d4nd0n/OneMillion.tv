import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components
import {
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule],
  declarations: [],
})
export class AngularMaterialModule {}
