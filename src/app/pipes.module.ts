import { NgModule } from '@angular/core';
import { BlaPipe } from './bla.pipe';

@NgModule({
  declarations: [BlaPipe],
  exports: [BlaPipe],
  providers: [BlaPipe],
})
export class PipesModule {}
