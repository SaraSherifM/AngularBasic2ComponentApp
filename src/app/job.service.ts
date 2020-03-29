import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  jobs:any = [
    {id:0 ,title:'Web Developer',requirments:'Proven working experience in web programming'
    ,description:'Full-time permanent Web Developer who will be responsible for the designing, coding and modifying a new International Schools website using Programming languages such as HTML, CSS, JavaScript, JQuery and API.',
    isClicked :false,counter : 0 },
    {id:1,title:'Fashion Designer',requirments: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    ,description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    ,isClicked :false,counter : 0},
    {id:2 ,title:'Technical engineer',requirments:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    isClicked :false,counter : 0},
    {id:3,title:'Accountant' ,requirments:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    isClicked :false,counter : 0},
    {id:4,title:'Accountant' ,requirments:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    isClicked :false,counter : 0},

  ];

  apply(id){
    
    if( !this.jobs[id].isClicked){
    
      this.jobs[id].isClicked = true;
      this.jobs[id].counter ++;
      console.log('button clicked',this.jobs[id].isClicked)
    }
    else{

      this.jobs[id].isClicked=false;
      console.log('unclicked',this.jobs[id].isClicked)

    }
}
}
