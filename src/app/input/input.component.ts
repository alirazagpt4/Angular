import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  name : string = '';

  // getName(event:Event){
  //   const inputElement = event.target as HTMLInputElement;
  //   this.name = inputElement.value;
  //   console.log(this.name);

  // }

  // setName(name: string) {
  //   this.name = name;
  //   console.log(this.name);
  // }

}
