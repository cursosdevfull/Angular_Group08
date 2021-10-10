import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CdevTableComponent } from './cdev-table.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CdevTableComponent],
  imports: [MatTableModule, CommonModule, FlexLayoutModule],
  exports: [CdevTableComponent],
})
export class CdevTableModule {}
