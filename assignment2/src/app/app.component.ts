import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  Values="";
  sortoption="";
  someValues:Array<string>=new Array<string>();
  CallSomeLogic(){
    if(this.Values!=""){
          this.someValues.push(this.Values);
          this.Values="";}
  }
}
