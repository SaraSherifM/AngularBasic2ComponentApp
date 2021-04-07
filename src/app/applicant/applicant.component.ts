import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";

@Component({
  selector: "app-applicant",
  templateUrl: "./applicant.component.html",
  styleUrls: ["./applicant.component.css"],
})
export class ApplicantComponent implements OnInit {
  levelArray: string[] = ["Native", "Fluent", "Very Good", "Good"];
  constructor(private fb: FormBuilder) {}

  applicant: any;
  applicantData;

  ngOnInit(): void {
    this.applicantData = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      languages: this.fb.array([this.addLanguageAndLevelFormGroup()]),
    });
  }

  addLanguageClick($event): void {
    $event.preventDefault();
    this.languages.push(this.addLanguageAndLevelFormGroup());
    console.log(this.languages.controls);
    console.log(this.applicantData.controls.languages.controls.formgroup);
    //console.log(`form Array .controls access first element+ ${this.languages.controls['1']} `);
  }

  //get returns abstract control and not form Array type cast to Formarray
  get languages(): FormArray {
    return this.applicantData.get("languages") as FormArray;
  }

  addLanguageAndLevelFormGroup(): FormGroup {
    return this.fb.group({
      language: [""],
      level: [""],
    });
  }

  counter: number;

  onSubmit($event) {
    $event.preventDefault();
    if (this.applicantData.valid) {
      this.applicant = this.applicantData.value;
      console.log();
      for (let i = 1; i < this.languages.length; i++) {
        this.languages.removeAt(i);
      }

      this.applicantData.reset();
    }

    this.counter = 0;
  }
}
