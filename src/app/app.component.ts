import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('pages', { read: ViewContainerRef, static: true })
  pages: ViewContainerRef;
  title = 'PortfolioV1';
  navLinks = [];
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      AboutComponent
    );
    this.pages.createComponent(componentFactory);
    this.navLinks = [
      {
        title: 'about',
        active: true,
        icon: 'fa-user'
      },
      {
        title: 'resume',
        active: false,
        icon: 'fa-file-alt'
      },
      {
        title: 'works',
        active: false,
        icon: 'fa-paint-brush'
      },
      {
        title: 'blogs',
        active: false,
        icon: 'fa-comment-alt'
      },
      {
        title: 'contact',
        active: false,
        icon: 'fa-at'
      }
    ];
  }

  clickedNav(navTitle) {
    switch (navTitle) {
      case 'about':
        this.loadAbout();
        break;
      case 'resume':
        this.loadResume();
        break;
      case 'works':
        this.loadWorks();
        break;
      case 'blogs':
        this.loadBlogs();
        break;
      case 'contact':
        this.loadContact();
        break;
    }
  }

  loadAbout() {
    this.pages.clear();
    setTimeout(() => {
      const componentFactory = this.resolver.resolveComponentFactory(
        AboutComponent
      );
      this.pages.createComponent(componentFactory);
    }, 260);
  }
  loadResume() {
    this.pages.clear();
    setTimeout(() => {
      const componentFactory = this.resolver.resolveComponentFactory(
        ResumeComponent
      );
      this.pages.createComponent(componentFactory);
    }, 260);
  }
  loadWorks() {
    this.pages.clear();
    setTimeout(() => {
      const componentFactory = this.resolver.resolveComponentFactory(
        WorksComponent
      );
      this.pages.createComponent(componentFactory);
    }, 260);
  }
  loadBlogs() {
    this.pages.clear();
    setTimeout(() => {
      const componentFactory = this.resolver.resolveComponentFactory(
        BlogComponent
      );
      this.pages.createComponent(componentFactory);
    }, 260);
  }
  loadContact() {
    this.pages.clear();
    setTimeout(() => {
      const componentFactory = this.resolver.resolveComponentFactory(
        ContactComponent
      );
      this.pages.createComponent(componentFactory);
    }, 260);
  }

  // ngOnDestroy() {
  //   this.pages.clear();
  // }
}
