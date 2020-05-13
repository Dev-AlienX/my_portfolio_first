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
import { ResumeDataService } from './services/resume-data.service';
// import { threadId } from 'worker_threads';

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
  count = 0;
  singleLoaded = false;
  allLoaded = false;
  componentObj = [
    {
      component: AboutComponent,
      name: 'about'
    },
    {
      component: ResumeComponent,
      name: 'resume'
    },
    {
      component: WorksComponent,
      name: 'works'
    },
    {
      component: BlogComponent,
      name: 'blog'
    },
    {
      component: ContactComponent,
      name: 'contact'
    }
  ];
  allData:any = [];
  aboutData= [];
  resumeSecData= [];
  workData= [];
  blogData= [];
  ContactData= [];

  constructor(
    private resolver: ComponentFactoryResolver,
    private resumeDataService: ResumeDataService
  ) {}

  resolution = window.document.body.offsetWidth;

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      this.allData.push(data[0]);
      this.aboutData.push(data[0].about);
      this.resumeSecData.push(data[0].resume);
      this.workData.push(data[0].works);
      this.blogData.push(data[0].blog);
      this.ContactData.push(data[0].contact);
    });
    if (this.resolution < 1200) {
      this.loadAllPages();
    } else {
      this.loadSinglePage();
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
        title: 'blog',
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
    this.count++;
    this.resolution = window.document.body.offsetWidth;
    if (e.target.window.innerWidth === window.document.body.offsetWidth ) {
      if (this.resolution < 1200) {
        if (!this.allLoaded) {
          this.loadAllPages();
        }
      } else {
        if (!this.singleLoaded) {
          this.loadSinglePage();
        }
      }
    }
  }

  scrollToTop(evnt) {
    if (
      document
        .getElementsByClassName('about-container')[0]
        .getBoundingClientRect().y < 70
    ) {
      this.navLinks.forEach(element => {
        if (element.title === 'about') {
          element.active = true;
        }
      });
    } else {
      this.navLinks.forEach(element => {
        if (element.title === 'about') {
          element.active = false;
        }
      });
    }
    // console.log(
    //   document
    //     .getElementsByClassName('about-container')[0]
    //     .getBoundingClientRect().y
    // );
  }

  getCompName(navTitle) {
    let dynamicComp;
    this.componentObj.forEach(el => {
      if (navTitle === el.name) {
        dynamicComp = el.component;
      }
    });
    return dynamicComp;
  }
  clickedNav(evnt) {
    if (this.resolution < 1200) {
      const componentName = evnt.currentTarget.innerText.toLowerCase();
      document.getElementsByTagName(componentName)[0].scrollIntoView();
      window.scrollBy(0, -60);
    } else {
      // tslint:disable-next-line:prefer-const
      let navTitle = evnt.currentTarget.innerText.toLowerCase();
      this.allPages.clear();
      const dynamicComponent = this.getCompName(navTitle);
      this.loadDynamicComp(dynamicComponent);
    }
  }
  loadDynamicComp(dynamicComponenty) {
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      dynamicComponenty
    );
    this.pages.createComponent(componentFactory);
    this.singleLoaded = true;
  }

  loadAllPages() {
    // debugger
    this.allPages.clear();
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
    // const compRefAbout = this.allPages.createComponent(componentFactoryAbout);
    // compRefAbout.instance.config = this.aboutData;
    this.allPages.createComponent(componentFactoryResume);
    // const compRefResume = this.allPages.createComponent(componentFactoryResume);
    // compRefResume.instance.config = this.resumeSecData;
    this.allPages.createComponent(componentFactoryWorks);
    // const compRefWork = this.allPages.createComponent(componentFactoryWorks);
    // compRefWork.instance.config = this.workData;
    this.allPages.createComponent(componentFactoryBlogs);
    // const compRefBlog = this.allPages.createComponent(componentFactoryBlogs);
    // compRefBlog.instance.config = this.blogData;
    this.allPages.createComponent(componentFactoryContact);
    // const compRefContact = this.allPages.createComponent(componentFactoryBlogs);
    // compRefContact.instance.config = this.ContactData;
    this.allLoaded = true;
  }
  loadSinglePage() {
    this.allPages.clear();
    this.pages.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      AboutComponent
    );
    this.pages.createComponent(componentFactory);
  }
}
