import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MATERIALMODULES = [MatButtonModule];
@NgModule({
  imports: [...MATERIALMODULES],
  declarations: [],
  exports: [...MATERIALMODULES],
})
export class MaterialModule {}
