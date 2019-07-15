import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserServiceService } from '../providers/user-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  Informations: [];

  constructor(
    public userServiceService: UserServiceService) { }

  ngOnInit() {
    this.userServiceService.getInformations().subscribe(
      (data: any ) => {
        this.Informations = data.results;
      },
      (error) => {
        console.error(error);
      });
  }

}
