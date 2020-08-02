import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const matModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  imports: [matModules],
  exports: [matModules],
})
export class MaterialModule {}
