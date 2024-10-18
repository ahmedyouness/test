import { Component, inject } from '@angular/core';
import { RequestsService } from '../services/data.service';

@Component({
  selector: 'app-lists-requests',
  templateUrl: './lists-requests.component.html',
  styleUrl: './lists-requests.component.scss'
})
export class ListsRequestsComponent {
  requestService = inject(RequestsService);

}
