import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  rashmi = [
    {'label':'Name','type':'textbox','name':'txtname','option':[]},
    {'label':'Gender','type':'radio','name':'gender','option':[{'key':'male','value':'male'}, {'key':'female','value':'female'}]},
    { 'label': 'Select Date', 'type': 'date', 'name': 'date', 'option': [] },
    { 'label': 'Enter full address', 'type': 'textarea', 'name': 'textarea', 'option': [] },
    { 'label': 'region', 'type': 'select', 'name': 'region', 'option': [{ 'key': 'urban', 'value': 'urban' }, { 'key': 'rural', 'value': 'rural' }] },
    { 'label': 'accept terms', 'type': 'checkbox', 'name': 'subject', 'option': [{ 'key': 'Accept', 'value': 'Accept' }, {'key': 'Reject', 'value':'Reject'}] }
  ];

  profileForm:FormGroup;
  isFormControl = false;
  constructor(private fb:FormBuilder) {

   }

  async ngOnInit() {
    const group = this.fb.group({}); 
      this.rashmi.forEach(input=>{
     //   group[input.name]=new FormControl('');  
        group.addControl(input.name, this.fb.control(''));
      })
      this.profileForm = group;
      this.isFormControl = true;
      
      console.log(this.profileForm);
    }

    onSubmit(){
      console.log(this.profileForm.value);
    }
  
  }









 
    
   
    