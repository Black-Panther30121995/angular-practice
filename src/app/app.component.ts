import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
  count:number=0;

  increment(){
    this.count++;
  }
  decrement(){
    if(this.count>0){
      this.count--;
    }
    else{
      alert("Count cannot be negative");
    }
  }
  reset(){
    this.count=0;
  }

  handleCounter(val:string)
  {
    if(val=="increment"){
      this.increment();
    }
    else if(val=="decrement"){
      this.decrement();
    }
    else{
      this.reset();
    }
  }

  handleEvent(event:MouseEvent){
    console.log("function called",event.type);
    console.log("function called",(event.target as Element).classList);
  }

}
