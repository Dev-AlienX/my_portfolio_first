import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { element } from 'protractor';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style
} from '@angular/animations';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnInit, AfterViewInit {
  constructor(private resolver: ComponentFactoryResolver) { }
  @ViewChild('modal', { read: ViewContainerRef, static: true })
  modal: ViewContainerRef;
  @ViewChild('cols', { read: ElementRef, static: true })
  cols: ElementRef;
  @Input() config = [];
  @Input() title = '';
  filterBtn = [{ name: 'all', active: true }];
  data = [];
  totalColHeight = 0;
  ngOnInit() {
    const tempBtn = [];
    this.config.forEach(element => {
      tempBtn.push({ name: element.category, active: false });
    });

    tempBtn.map(x =>
      this.filterBtn.filter(a => a.name === x.name && a.active === x.active)
        .length > 0
        ? null
        : this.filterBtn.push(x)
    );
    this.totalColHeight = 1564;
    this.data = this.config;
  }
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.calcColHeight();
    // }, 300);
  }

  filterGallery(value, e) {
    this.filterBtn.forEach(elm => {
      if (elm.name === value) {
        elm.active = true;
      } else {
        elm.active = false;
      }
    });
    if (value !== 'all') {
      this.data = [];
      // tslint:disable-next-line: no-shadowed-variable
      this.config.forEach(element => {
        if (element.category === value) {
          this.data.push(element);
        }
      });
      setTimeout(() => {
        this.calcColHeight();
      }, 100);
    } else {
      this.totalColHeight = 1478;
      this.data = this.config;
      // this.calcColHeight();
    }
  }

  calcColHeight() {

    const allCols = this.cols.nativeElement.children;
    let tempNo = 0;
    for (const item of allCols) {
      tempNo = tempNo + item.offsetHeight;
    }
    console.log('temp no', tempNo);
    if (this.cols.nativeElement.children.length < 3) {
      this.totalColHeight = tempNo + 60;
      console.log('less than 3', this.totalColHeight);
    } else {
      this.totalColHeight = tempNo / 2 + 90;
      console.log('half ', this.totalColHeight);
    }
  }

  showModal() {
    this.modal.clear();
    const componentFactory = this.resolver.resolveComponentFactory(
      ModalComponent
    );
    this.modal.createComponent(componentFactory);
  }
}
