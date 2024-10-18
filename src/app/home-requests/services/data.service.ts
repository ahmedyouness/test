import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requestList:  any[ ] =[]
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
  }
  requestForm: any = this.formBuilder.group({
    id: [''],
    project: ['', Validators.required],
    user: ['', Validators.required],
    contract: ['', Validators.required],
  });

  formReset(){
    this.requestForm.reset();
    this.requestForm.controls['id'].setValue('')
    
  }



}
