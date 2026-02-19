import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // constructor(private route:ActivatedRoute){};

  // name="";
  // ngOnInit()
  // {
  //   this.route.params.subscribe((params)=>{
  //     console.log(params);
  //     this.name=params['name'];
  //   })
  // }

  // @Input() user:String='';
  // // @Input() city:String='';

  @Output() getUsers= new EventEmitter();
  users=['Sam','Peter','Bruce','Daniel'];

  loadData()
  {
    this.getUsers.emit(this.users);
  }
}
