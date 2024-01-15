import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  insertRow: FormGroup;
  deleteRow: FormGroup;
  table_data: any[] = [];

  constructor(private httpService: HttpService) {
    this.insertRow = new FormGroup({
      name: new FormControl(''),
      number: new FormControl(''),
    });

    this.deleteRow = new FormGroup({
      name: new FormControl(''),
    });
   
  }

  get(): void {
    this.httpService.get().subscribe((data) => {
      console.log(data);
      this.table_data = data;
      console.log(this.table_data);
    });
  }


  onAdd() {
    console.log(this.insertRow.value);
    this.httpService.postInsert(this.insertRow.value).subscribe((data) => {
      console.log(data);
    });
  } 

  onDelete() {
    console.log(this.deleteRow.value);
    this.httpService.postDelete(this.deleteRow.value).subscribe((data) => {
      console.log(data);
    });
  } 

  

}
