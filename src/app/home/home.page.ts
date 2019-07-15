import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserServiceService } from '../providers/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: [];

  constructor(
    public navCtral: NavController,
    public userServiceService: UserServiceService
  ) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.userServiceService.getUsers().subscribe(
      (data: any ) => {
        this.users = data.results;
      },
      (error) => {
        console.error(error);
      });
  }
}
