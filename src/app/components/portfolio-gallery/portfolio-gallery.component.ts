import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { trigger } from '@angular/animations';
import { fadeIn } from '../animation/fadeIn';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss'],
  animations: [trigger('fadeIn', fadeIn())]
})
export class PortfolioGalleryComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {}
  @ViewChild('modal', { read: ViewContainerRef, static: true })
  modal: ViewContainerRef;
  @ViewChild('cols', { read: ElementRef, static: true })
  cols: ElementRef;
  @Input() config = [];
  @Input() title = '';
  dataLoaded = false;
  sceleton = true;
  filterBtn = [{ name: 'all', active: true }];
  data = [];
  totalColHeight = 0;
  allColWithHeight = 0;
  colDetail = [];
  ngOnInit() {
    const tempBtn = [];
    this.config.forEach(eleme => {
      tempBtn.push({ name: eleme.category, active: false });
    });

    tempBtn.map(x =>
      this.filterBtn.filter(a => a.name === x.name && a.active === x.active)
        .length > 0
        ? null
        : this.filterBtn.push(x)
    );
    // this.totalColHeight = 1478;
    this.data = this.config;
    setTimeout(() => {
      this.sceleton = false;
      // this.calcColHeight();
      this.allColConfig('all');
    }, 2000);
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
      this.config.forEach(async element => {
        if (element.category === value) {
          this.data.push(element);
        }
      });
      this.allColConfig(value);
    } else {
      this.data = this.config;
      this.allColConfig('all');
    }
  }
  allColConfig(val) {
    
    const allCols = this.cols.nativeElement.children;
    let temlheight = 0;
    if (this.colDetail.length === 0) {
      for (const item of allCols) {
        this.colDetail.push({
          category: item.getElementsByClassName('category')[0].textContent,
          colHeight: item.offsetHeight
        });
      }
    }
    this.totalColHeight = 0;
    let extraPx = 60;
    this.colDetail.forEach(itm => {

      if (val === itm.category) {
        temlheight = temlheight + itm.colHeight;
      } else if (val === 'all') {
        temlheight = temlheight + itm.colHeight;
      }
    });
    if (this.data.length < 2) {
      this.totalColHeight = temlheight + extraPx;
    } else if (this.data.length <= 5) {
      extraPx = 90;
      this.totalColHeight = temlheight / 2 + extraPx;
    } else {
      this.totalColHeight = temlheight / 2 + extraPx;
    }
  }
  calcColHeight() {
    const allCols = this.cols.nativeElement.children;
    let tempNo = 0;
    if (this.data === allCols) {
      for (const item of allCols) {
        tempNo = tempNo + item.offsetHeight;
      }
      if (this.cols.nativeElement.children.length < 3) {
        this.totalColHeight = tempNo + 60;
      } else {
        this.totalColHeight = tempNo / 2 + 90;
      }
    } else {
      setTimeout(() => {
        this.calcColHeight();
      }, 100);
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
