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
  onDelete(emp: any) {
    const index = this.requestService.requestList.findIndex(e => e.id == emp.id)
    if (confirm('Are you sure??')) {
      this.requestService.requestList.splice(index, 1);
      localStorage.setItem('angular18local', JSON.stringify(this.requestService.requestList));
      this.getRequest()
    }
  }

}
