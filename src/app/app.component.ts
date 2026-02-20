import {
  afterNextRender,
  afterRender,
  Component,
  computed,
  effect,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NgIf,
  NgForOf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';
import { ProductService } from './services/product.service';
import { UsersService } from './services/users.service';
import { User } from './interfaces/Users';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProfileComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    ReactiveFormsModule,
    UserComponent,
    CurrencyConvertorPipe,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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

  show = true;

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

  // name=new FormControl('anil');
  // password=new FormControl('123');
  // displayValue(){
  //   console.log(this.name.value, this.password.value);
  // }
  // setValues()
  // {
  //   this.name.setValue('peter');
  //   this.password.setValue('321');
  // }

  // profileForm=new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.minLength(5), Validators.required]),
  //   email:new FormControl('',[Validators.required,Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,5}$')]),
  // })

  // onSubmit(){
  //   console.log(this.profileForm.value);
  // }

  // setValue(){
  //   this.profileForm.setValue({name:"Peter",password:"321",email:"peter@test.com"});
  // }

  // submitData(){
  //   console.log(this.profileForm.value);
  // }

  // get name(){
  //   return this.profileForm.get('name');
  // }

  // get email(){
  //   return this.profileForm.get('email');
  // }

  //   get password(){
  //   return this.profileForm.get('password');
  // }

  // userDetails:any;
  // addDetails(val:NgForm)
  // {
  //   console.log(val);
  //   this.userDetails=val;

  // }

  // userName="Bruce";
  // onUserChange(user:string)
  // {
  //   this.userName=user;
  // }

  // users:undefined|string [];

  // handleUsers(users:string[])
  // {
  //   console.log(users);
  //   this.users=users;
  // }

  // amount=10;
  // @ViewChild('user') UserComponent:any;

  // constructor()
  // {
  //   afterRender(()=>{
  //     console.log("afterRender",this.UserComponent.counter);
  //   })

  //   afterNextRender(()=>{
  //     console.log("After Next Render Called");
  //   })
  // }
  // counter=0;
  // updateCounter()
  // {
  //   this.counter++;
  // }

  // productData:{name:string,brand:string,price:number}[] | undefined;
  // constructor( private productService:ProductService)
  // {

  // }

  // getProductData()
  // {
  //   this.productData =this.productService.getProductData();
  //   console.log(this.productData);
  // }
  // productList:any=[]
  // constructor(private productService:ProductService){}

  // ngOnInit()
  // {
  //   this.productService.getProductList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productList=data.products;
  //   });
  // }

  constructor(private userService: UsersService) {}

  userList: User[] = [];
  selectedUser: User | undefined;
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.userList = data;
    });
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
        if (data) {
          this.getUser();
        }
      });
    } else {
      const userData={...user,id:this.selectedUser.id}
      this.userService.updateUser(userData).subscribe((data:User)=>{
        if(data){
          this.getUser();
        }

      })
    }
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      this.getUser();
    });
  }

  selectUser(id: number) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      console.log(data);
      this.selectedUser = data;
    });
  }
}
