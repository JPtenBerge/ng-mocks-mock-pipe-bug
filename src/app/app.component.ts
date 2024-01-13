import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlaPipe } from './bla.pipe';
import { PipesModule } from './pipes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipesModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private blaPipe: BlaPipe) {}

  doSomething() {
    let val = this.blaPipe.transform('Frank');
    console.log('result of pipe transform:', val);
    return val;
  }
}
