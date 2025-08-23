import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit{

    constructor(public acticaterouter:ActivatedRoute){}


    errorName = "";

    ngOnInit(): void {
         this.acticaterouter.data.subscribe((resulst)=>{    //[{ issueName : '404 Not found'}]
             console.log(resulst);
             this.errorName =   resulst[0].issueName   //  404 not found
         })
    }


}
