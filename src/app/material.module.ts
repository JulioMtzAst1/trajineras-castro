import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
