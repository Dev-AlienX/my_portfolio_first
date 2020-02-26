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
  @ViewChild('allPages', { read: ViewContainerRef, static: true })
  allPages: ViewContainerRef;
  title = 'PortfolioV1';
  notMobileScreen = true;
  navLinks = [];
  constructor(private resolver: ComponentFactoryResolver) {}

  resolution = window.document.body.offsetWidth;

  ngOnInit() {
    if (this.resolution < 1200) {
      this.loadAllPages();
    } else {
      this.allPages.clear();
      this.pages.clear();
      const componentFactory = this.resolver.resolveComponentFactory(
        AboutComponent
      );
      this.pages.createComponent(componentFactory);
    }

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
  // ngAfterViewInit(): void {
  //   this.screenSize('null');
  // }

  screenSize(e) {
    this.resolution = window.document.body.offsetWidth;
    if (e.target.window.innerWidth === window.document.body.offsetWidth) {
      this.resolution = window.document.body.offsetWidth;
      if (this.resolution < 1200) {
        this.loadAllPages();
      }
    }
  }
  clickedNav(evnt) {
    // console.log(this.resolution < 1200);
    if (this.resolution < 1200) {
    } else {
      // tslint:disable-next-line:prefer-const
      let navTitle = (evnt.currentTarget.innerText).toLowerCase();
      this.allPages.clear();
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
  }
  loadAllPages() {
    this.pages.clear();
    const componentFactoryAbout = this.resolver.resolveComponentFactory(
      AboutComponent
    );
    const componentFactoryResume = this.resolver.resolveComponentFactory(
      ResumeComponent
    );
    const componentFactoryWorks = this.resolver.resolveComponentFactory(
      WorksComponent
    );
    const componentFactoryBlogs = this.resolver.resolveComponentFactory(
      BlogComponent
    );
    const componentFactoryContact = this.resolver.resolveComponentFactory(
      ContactComponent
    );

    this.allPages.createComponent(componentFactoryAbout);
    this.allPages.createComponent(componentFactoryResume);
    this.allPages.createComponent(componentFactoryWorks);
    this.allPages.createComponent(componentFactoryBlogs);
    this.allPages.createComponent(componentFactoryContact);
  }
  loadAbout() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      AboutComponent
    );
    this.pages.createComponent(componentFactory);
  }
  loadResume() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      ResumeComponent
    );
    this.pages.createComponent(componentFactory);
  }
  loadWorks() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      WorksComponent
    );
    this.pages.createComponent(componentFactory);
  }
  loadBlogs() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      BlogComponent
    );
    this.pages.createComponent(componentFactory);
  }
  loadContact() {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      ContactComponent
    );
    this.pages.createComponent(componentFactory);
  }
}