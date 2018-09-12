import { Component, OnInit } from "@angular/core";

export interface gender {
  displayField: string;
  valueField: string;
}

export interface technology {
  displayField: string;
  valueField: string;
}

export interface experience {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
}

export interface education {
  type?: string;
  name?: string;
  year?: number;
  percentage?: number;
}

export interface educationType {
  displayField: string;
  valueField: string;
}

@Component({
  selector: "app-candidate-registration",
  templateUrl: "./candidate-registration.component.html",
  styleUrls: ["./candidate-registration.component.css"]
})
export class CandidateRegistrationComponent implements OnInit {
  clearWorkButton: boolean = false;
  clearEduButton: boolean = false;

  genders: gender[] = [
    { displayField: "Male", valueField: "male" },
    { displayField: "Female", valueField: "female" }
  ];

  experiences: experience[] = [{ name: "" }];

  educations: education[] = [{ type: "" }];

  educationType: educationType[] = [
    { displayField: "X", valueField: "X" },
    { displayField: "XII", valueField: "XII" },
    { displayField: "DIPLOMA", valueField: "Diploma" },
    { displayField: "BE", valueField: "BE" },
    { displayField: "MCA", valueField: "MCA" },
    { displayField: "OTHER", valueField: "Other" }
  ];

  technologies: technology[] = [
    { displayField: "JAVA", valueField: "java" },
    { displayField: "CPP", valueField: "cpp" },
    { displayField: "TESTING", valueField: "testing" },
    { displayField: "OTHER", valueField: "other" }
  ];

  constructor() {}

  ngOnInit() {}

  addExperience() {
    this.experiences.push({ name: "", reason: "" });
    this.clearWorkButton = this.experiences.length == 1 ? false : true;
  }

  removeExperience(i: number) {
    this.experiences.splice(i, 1);
    this.clearWorkButton = this.experiences.length == 1 ? false : true;
  }

  addEducation() {
    this.educations.push({ type: "" });
    this.clearEduButton = this.educations.length == 1 ? false : true;
  }

  removeEducation(i: number) {
    this.educations.splice(i, 1);
    this.clearEduButton = this.educations.length == 1 ? false : true;
  }
}
