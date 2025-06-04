import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [ HelloComponent , LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Concepts';
   private x=10;
   private y=5

   public add():number {
    return this.x + this.y;
   }

}
