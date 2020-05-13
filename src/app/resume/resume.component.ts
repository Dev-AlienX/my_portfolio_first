import { Component, OnInit, Input } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeSecData: any = [];
  experience: any = [];
  education: any = [];
  design: any = [];
  language: any = [];
  coding: any = [];
  knowledge: any;

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      this.resumeSecData.push(data[0].resume);
      data[0].resume[0].cv[0].experience.forEach(element => {
        this.experience.push(element);
      });
      data[0].resume[0].cv[0].education.forEach(element => {
        this.education.push(element);
      });
      data[0].resume[0].mySkills[0].design.forEach(element => {
        this.design.push(element);
      });
      data[0].resume[0].mySkills[0].languade.forEach(element => {
        this.language.push(element);
      });
      data[0].resume[0].mySkills[0].coding.forEach(element => {
        this.coding.push(element);
      });
      this.knowledge = data[0].resume[0].mySkills[0].knowledge;
    });
  }
}
