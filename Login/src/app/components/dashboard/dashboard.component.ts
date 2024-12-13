import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { ApiService } from '../../Services/api.service';
import { UserStoreService } from '../../Services/user-store.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public users:any=[];
  searchText:string="";
  public fullname:string="";
  constructor(private Auth:AuthService,private ApiService:ApiService,private UserstoreService:UserStoreService){

  }
  ngOnInit(): void {

    this.ApiService.get().subscribe(res=>{
      this.users=res
    });

    this.UserstoreService.getfullnamefromstore().subscribe(res=>{
      let fullnametoken=this.Auth.getfullname();
      this.fullname=res ||fullnametoken;
    })
    
  }

  signout(){
    this.Auth.signout()
  }

  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
  }
}
