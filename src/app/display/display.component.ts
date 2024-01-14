import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  // posts: any[] = []; 

  constructor(private httpService: HttpService) {}

  get(): void {
    this.httpService.get().subscribe((data) => {
      console.log(data);
      // this.posts = data;
    });
  }
}
