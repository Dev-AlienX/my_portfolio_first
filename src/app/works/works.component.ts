import { Component, OnInit, Input } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  workList;
  workData:any = [];
  workList2:any = [];
  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      this.workData.push(data[0].works);
    });
    this.workList2 = [
      {
        name: 'motercycle healmet',
        category: 'photo',
        img: 'assets/img/work1.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Minimalism Shapes',
        category: 'Video',
        img: 'assets/img/work2.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Staircase',
        category: 'Music',
        img: 'assets/img/work3.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Staircase',
        category: 'Design',
        img: 'assets/img/work4.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Mobile Application',
        category: 'photo',
        img: 'assets/img/work5.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Gereal Travels',
        category: 'photo',
        img: 'assets/img/work6.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Daylight Entrance',
        category: 'photo',
        img: 'assets/img/work7.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Social Website',
        category: 'photo',
        img: 'assets/img/work8.jpg',
        icon: 'fa-camera'
      }
    ];
  }
}
