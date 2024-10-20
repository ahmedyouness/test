import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestsService } from '../services/data-requests.service'
import { IRequestModel } from '../models/request.model';

@Component({
  selector: 'app-add-requests',
  templateUrl: './add-requests.component.html',
  styleUrl: './add-requests.component.scss'
})
export class AddRequestsComponent {
  
  requestsService = inject(RequestsService);

  requestList: IRequestModel
  
  
    get f(){
    return  this.requestsService.requestForm.controls
    }
  
    constructor(private dialogRef: MatDialogRef<AddRequestsComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any
    ) {
      this.requestList = data.requestList;
    }


    addRequest(){
      const loacalArray = localStorage.getItem('angular18local');
      if(loacalArray == null){
        const newArray = [];
        this.requestsService.requestForm.value['id']= 1;
        newArray.push(this.requestsService.requestForm.value);
        localStorage.setItem('angular18local',JSON.stringify(newArray))
      }
      else{
        const oldArray = JSON.parse(loacalArray);
        this.requestsService.requestForm.value['id'] =oldArray.length +1;
        oldArray.push(this.requestsService.requestForm.value);
        localStorage.setItem('angular18local', JSON.stringify(oldArray))
        console.log()
      }
      this.requestsService.formReset();
      this.dialogRef.close(loacalArray);
    }
    discardRequest(){
      this.dialogRef.close()
    }
}
