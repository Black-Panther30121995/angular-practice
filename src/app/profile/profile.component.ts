import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route:ActivatedRoute){}
  username:string|null="";
  ngOnInit(){
    // let name=this.route.snapshot.paramMap.get('name');
    // console.log(name);
    // this.username=name;

    // this.route.queryParams.subscribe(params=>{
    //   this.username=params['name'];
    // });
    this.route.data.subscribe((data)=>{
      this.username=data['name'];
    })
  }
}
