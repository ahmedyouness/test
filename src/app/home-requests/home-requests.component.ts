import { Component, inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRequestsComponent } from './add-requests/add-requests.component';
import { RequestsService } from './services/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-requests',
  templateUrl: './home-requests.component.html',
  styleUrl: './home-requests.component.scss'
})
export class HomeRequestsComponent {

  data: any
  requestService = inject(RequestsService);
  private isDestroyed$ = new Subject<void>();
  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getRequest()
  }
  getRequest() {
    const loacalArray = localStorage.getItem('angular18local');
    if (loacalArray != null) {
      this.requestService.requestList = JSON.parse(loacalArray)
    }
  }
  addNewRequest(): void {
    const dialogRef = this.dialog.open(AddRequestsComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result, this.data);
      if (result) {
        this.data = result
        console.log('dada', result, this.data)
        this.getRequest()

      }
    });

  }

}
