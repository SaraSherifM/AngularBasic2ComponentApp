import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  applicant:any;
  applicantData;


  levelArray:string[] = ['Native','Fluent','Very Good','Good'];
  formgroup;
  ngOnInit(): void { 

    this.applicantData = this.fb.group({

      name: ['', Validators.required],

      email: ['', Validators.required ],

      languages: this.fb.array([
        this.addLanguageAndLevelFormGroup()
      ]),

     
  });  }

  
  addLanguageClick():void{
    //get returns abstract control and not form Array type cast to Formarray
    
    (<FormArray>this.applicantData.get('languages')).push(this.addLanguageAndLevelFormGroup());

    console.log(this.languages.controls);
    console.log(this.applicantData.controls.languages.controls.formgroup)
    //console.log(`form Array .controls access first element+ ${this.languages.controls['1']} `);


  }

  get languages(){
    return this.applicantData.get('languages') as FormArray
  }


   addLanguageAndLevelFormGroup( ):FormGroup {
     return  this.fb.group({
       language: [''],
       level: ['']
     });
      
   }
   
   counter:number ;

   onSubmit(){

    if(this.applicantData.valid)
    {
      this.applicant =this.applicantData.value;
      console.log(this.applicant); 
      this.applicantData.reset(); 
      
    }
    this.counter = 0;

   }

    
}