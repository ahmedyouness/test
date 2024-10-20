import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requestList:  IRequestModel[];
  constructor(private formBuilder: FormBuilder) { 
  }
  requestForm: any = this.formBuilder.group({
    id: [''],
    project: ['', Validators.required],
    user: ['', Validators.required],
    contract: [''],
  });

  formReset(){
    this.requestForm.reset();
    this.requestForm.controls['id'].setValue('')
    
  }

}
