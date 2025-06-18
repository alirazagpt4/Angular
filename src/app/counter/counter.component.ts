import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count : number = 0;
  plus:string = 'Plus';
  minus:string = 'Minus';
  reset:string = 'Reset';

  handleCounter(val:string) {
    if(this.count < 0) {
      this.count = 0;
    }
    if(val === 'plus'){
      this.count = this.count + 1;
    }
    else if(val === 'minus'){
      this.count = this.count - 1;
    }
    else if(val === 'reset'){
      this.count = 0;

    }

    
   
   
  }


}
