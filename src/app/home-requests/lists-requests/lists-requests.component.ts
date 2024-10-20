import { Component, inject } from '@angular/core';
import { RequestsService } from '../services/data-requests.service';

@Component({
  selector: 'app-lists-requests',
  templateUrl: './lists-requests.component.html',
  styleUrl: './lists-requests.component.scss'
})
export class ListsRequestsComponent {
  requestService = inject(RequestsService);
  
  ngOnInit(): void {
    this.getRequest()
  }
  getRequest() {
    const loacalArray = localStorage.getItem('angular18local');
    if (loacalArray != null) {
      this.requestService.requestList = JSON.parse(loacalArray)
    }
  }
}
