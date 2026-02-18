import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgFor, NgSwitch, NgSwitchCase,NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent, FormsModule, NgIf, NgForOf, NgFor, NgSwitch, NgSwitchCase,NgSwitchDefault,
    RouterOutlet,RouterLink
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
  // count:number=0;

  // increment(){
  //   this.count++;
  // }
  // decrement(){
  //   if(this.count>0){
  //     this.count--;
  //   }
  //   else{
  //     alert("Count cannot be negative");
  //   }
  // }
  // reset(){
  //   this.count=0;
  // }

  // handleCounter(val:string)
  // {
  //   if(val=="increment"){
  //     this.increment();
  //   }
  //   else if(val=="decrement"){
  //     this.decrement();
  //   }
  //   else{
  //     this.reset();
  //   }
  // }

  // handleEvent(event:Event){
  //   console.log("function called",event.type);
  //   // console.log("function called",(event.target as Element).classList);
  //   console.log("value: ",(event.target as HTMLInputElement).value);
  // }


  // name:string="";
  // displayName:string="";
  // getName(event:Event){
  //   this.name=(event.target as HTMLInputElement).value;
  //   // console.log(this.name);
  // }
  // showName()
  // {
  //   this.displayName=this.name;
  // }

  // setName(){
  //   this.name="Angular";
  // }


  // email="";
  // getEmail(val:string){
  //   this.email=val;
  //   console.log(this.email);
  // }
  // setEmail(){
  //   this.email="demo@gmail.com";
  // }

  // display=true;
  // x:number=10;
  // toggleDisplay(){
  //   this.display=!this.display;
  // }
  // hideDiv(){
  //   this.display=false;
  // }
  // showDiv(){
  //   this.display=true;
  // }

  // toggle:boolean=true;
  // toggleTwo(){
  //   this.toggle=!this.toggle;
  // }

  // color:number=1;
  // handleColor(num:number){
  //   this.color=num;
  // }

  // handleInput(event:Event){
  //   this.color=parseInt((event.target as HTMLInputElement).value);
  // }

  // colorTwo:string="red"
  // handleColorTwo(color:string){
  //   this.colorTwo=color;
  // }

  // changeColor(event:Event){
  //   this.colorTwo=(event.target as HTMLInputElement).value;
  // }

  // users:string[]=["Alice","Bob","Charlie","Bruce"];
  // students=[
  //   {name:"Alice",age:20,email:"alice@gmail.com"},
  //   {name:"Bob",age:22,email:"bob@gmail.com"},
  //   {name:"Charlie",age:25,email:"charlie@gmail.com"},
  //   {name:"Bruce",age:30,email:"bruce@gmail.com"}
  // ]
  
  // getStudentName(name:string){
  //   console.log(name);
  // }

  // count_signal=signal(10);
  // z:number=20;

  // // constructor()
  // // {
  // //   effect(()=>{
  // //     console.log(this.count_signal());
  // //   })
  // // }
  // updateValue(s:string){
  //   // this.count_signal.set(this.count_signal()+1);
  //   // // this.z=this.z+1;
  //   if(s==='inc'){
  //     this.count_signal.set(this.count_signal()+1);
  //   }
  //   else if(s==='dec')
  //   {
  //     this.count_signal.set(this.count_signal()-1);
  //   }
  // }

  // // data : WritableSignal<number | string>=signal<number | string>(10);

  // data : WritableSignal<number | string>=signal(100);
  // c:Signal<number>=computed(()=>10);

  // updateSignal()
  // {
  //   this.data.set("Hello");
  //   // this.count.set(this.count()+1); //computed cannot be set as it is derived from other signals and is read-only

  //   // this.data.update((val)=>val+1); //cannot work with multiple types in signal as it does not know which type to expect in update function, so we have to use type assertion
  // }

  // // m=10;
  // m=signal(10);
  // y=signal(20);
  // sum=computed(()=>this.m()+this.y());

  // showValue()
  // {
  //   console.log(this.sum());
  //   this.y.set(100);
  //   console.log(this.sum());

  //   // this.z.set(200);
  // }

  // updateM()
  // {
  //   this.m.set(200);
  // }

  // userName=signal("Alice");

  // displayHeading=false;
  // countThree=signal(0)
  // constructor()
  // {
  //   effect(()=>{
  //     // console.log("User name is: ",this.userName());
  //     if(this.countThree()==2)
  //     {
  //       this.displayHeading=true;
  //       setTimeout(()=>{
  //         this.displayHeading=false;
  //       },2000);
  //     }
  //     else{
  //       this.displayHeading=false;
  //     }

  //   })
  // }

  // toggleValue()
  // {
  //   this.countThree.set(this.countThree()+1);
  // }

  // nameTwo=""
  // changeName(event:Event)
  // {
  //   this.nameTwo=(event.target as HTMLInputElement).value;
  // }

  // task="";
  // taskList:{id:number,task:string}[]=[]

  // addTask()
  // {
  //   this.taskList.push({id:this.taskList.length+1,task:this.task});
  //   this.task="";
  //   console.log(this.taskList);
  // }
  // deleteTask(taskId:number)
  // {
  //   this.taskList=this.taskList.filter(task=>task.id!=taskId);
  // }
  // color='red';
  // fontsize="50px";

  // fontsizeBig='80px';
  // fontsizeSmall='40px';

  // zoom:boolean=false;

  // updateHeadingSize()
  // {
  //   this.zoom=!this.zoom;
  // }

  show=true;

  // students=["Anil","Sam","Peter","Vinay","Bruce"]
  
  // studentData=[{name:"Anil",age:29,email:"anil@test.com"},
  //   {name:"Sam",age:27,email:"sam@test.com"},
  //   {name:"Peter",age:29,email:"peter@test.com"},
  //   {name:"Vinay",age:30,email:"vinay@test.com"},
  //   {name:"Bruce",age:28,email:"bruce@test.com"}
  // ]

  // login=false;

  // block=0;
  // updateBlock(){
  //   this.block++;
  // }
  // color='';

  // changeColor(col:string)
  // {
  //   this.color=col;
  // }

}




