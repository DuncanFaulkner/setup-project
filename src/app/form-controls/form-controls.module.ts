import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

const routes: Routes = [{ path: '', component: AutoCompleteComponent }];

const FEATUREMODULES = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  [RouterModule.forChild(routes)],
];
@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [...FEATUREMODULES],
})
export class FormControlsModule {}
