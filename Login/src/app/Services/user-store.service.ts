import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullName$=new BehaviorSubject<string>("");
  private role$=new BehaviorSubject<string>("");
  constructor() { }


  public getrolefromstore(){
    return this.role$.asObservable();
  }

  public setrolefromstore(role:string){
    this.role$.next(role)
  }

  public getfullnamefromstore(){
    return this.fullName$.asObservable();
  }

  public setfullnamefromstore(fullName:string)
  {
    this.fullName$.next(fullName)
  }
}
