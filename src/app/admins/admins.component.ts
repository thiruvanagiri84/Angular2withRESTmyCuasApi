import { Component, OnInit } from '@angular/core';
import { AdminsdataService } from '../shared';

@Component({
  selector: 'admins-list',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
  providers: [AdminsdataService]
})

export class AdminsComponent implements OnInit {
    adminsArray: Array<any>;

    constructor(private adminsService: AdminsdataService) { }

    ngOnInit(){
        this.adminsService.getAll().subscribe(
            data => {
                this.adminsArray = data;
                console.log(this.adminsArray);
                for(const admin of this.adminsArray){
                    //do nothing
                }
            },
            error => console.log(error)
        )
    }
}