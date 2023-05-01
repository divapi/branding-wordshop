import { Component } from '@angular/core';
import {DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
  data:any
  
  constructor(private databaseService: DatabaseService) {

   }
  ngOnInit() {
    this.databaseService.getProducts().subscribe(data => {
      data.forEach(element => {
      let date = new Date(element.release.seconds);
        element.release = date.toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'});
      });
      this.data = data
    });
  }


}
