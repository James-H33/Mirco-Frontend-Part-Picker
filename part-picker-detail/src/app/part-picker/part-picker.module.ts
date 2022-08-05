import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PartPickerComponent } from './part-picker.component';
import { PICKER_ROUTES } from './part-picker-routing.module';
import { PickerLibModule } from 'picker-lib';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    PickerLibModule,
    RouterModule.forChild(PICKER_ROUTES)
  ],
  declarations: [
    PartPickerComponent,
    SkeletonComponent
]
})
export class PartPickerModule { }
