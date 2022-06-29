import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MATERIALMODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
];
@NgModule({
  imports: [MATERIALMODULES],
  declarations: [],
  exports: [MATERIALMODULES],
})
export class MaterialModule {}
