import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  constructor() { }
  flag = false;
  applicant:any;
  applicantData:FormGroup;

  lang = 1;
  languages:string[] = ['Arabic','English', 'French','German'];

  levels:string[] = ['Native','Fluent','Very Good','Good'];

  ngOnInit(): void { 

    this.applicantData = new FormGroup({

      name: new FormControl('', [ Validators.required ]),

      email: new FormControl('', [ Validators.required ]),

      Language1: new FormControl(''),
      Level1: new FormControl(''),
      Language2: new FormControl(''),
      Level2: new FormControl(''),

    
  });



   }

   add(){
     this.flag = true;
    
      
     
   }
   onSubmit(){
    if(this.applicantData.valid)
    {
      this.applicant =this.applicantData.value;
      console.log(this.applicant); 
      this.applicantData.reset(); 
      
    }

   }

    
}