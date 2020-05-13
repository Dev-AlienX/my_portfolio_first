import { Component, OnInit, Input } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogData = [];
  constructor(
    private resumeDataService: ResumeDataService) { }

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      data[0].blog.forEach(element => {
        this.blogData.push(element);
      });
    });
  }

}
