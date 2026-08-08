import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
} from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { trigger } from "@angular/animations";
import { fadeIn } from "../animation/fadeIn";

@Component({
  selector: "portfolio-gallery",
  templateUrl: "./portfolio-gallery.component.html",
  styleUrls: ["./portfolio-gallery.component.scss"],
  animations: [trigger("fadeIn", fadeIn())],
})
export class PortfolioGalleryComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {}
  @ViewChild("modal", { read: ViewContainerRef, static: true })
  modal: ViewContainerRef;
  @ViewChild("cols", { read: ElementRef, static: true })
  cols: ElementRef;
  @Input() config = [];
  @Input() title = "";
  sceleton = true;
  filterBtn = [{ name: "all", active: true }];
  data = [];
  totalColHeight = "unset";
  colDetail = [];
  innerWidthNew = window.document.body.offsetWidth;
  currentCategory = "";
  ngOnInit() {
    const tempBtn = [];
    // setTimeout(() => {
    this.config.forEach((eleme) => {
      tempBtn.push({ name: eleme.category, active: false });
    });
    // }, 1000);

    tempBtn.map((x) =>
      this.filterBtn.filter((a) => a.name === x.name && a.active === x.active)
        .length > 0
        ? null
        : this.filterBtn.push(x)
    );
    this.data = this.config;
    setTimeout(() => {
      this.sceleton = false;
      this.allColConfig("all");
    }, 1500);
  }

  filterGallery(value, e) {
    this.filterBtn.forEach((elm) => {
      if (elm.name === value) {
        elm.active = true;
      } else {
        elm.active = false;
      }
    });

    if (value !== "all") {
      this.data = [];
      // tslint:disable-next-line: no-shadowed-variable
      this.config.forEach(async (element) => {
        if (element.category === value) {
          this.data.push(element);
        }
      });
      this.allColConfig(value);
    } else {
      this.data = this.config;
      this.allColConfig("all");
    }
  }
  allColConfig(val) {
    this.currentCategory = val;
    const allCols = this.cols.nativeElement.children;
    let tempHeight = 0;
    if (this.colDetail.length === 0) {
      for (const item of allCols) {
        this.colDetail.push({
          category: item.getElementsByClassName("category")[0].textContent,
          colHeight: item.offsetHeight,
        });
      }
    }
    this.totalColHeight = " ";
    let extraPx = 70;
    this.colDetail.forEach((itm) => {
      if (val === itm.category) {
        tempHeight = tempHeight + itm.colHeight;
      } else if (val === "all") {
        tempHeight = tempHeight + itm.colHeight;
      }
    });

    // console.log(this.innerWidthNew, 'innerWidth');
    if (this.innerWidthNew < 768) {
      this.totalColHeight = "unset";
    } else {
      if (this.data.length < 2) {
        this.totalColHeight = String(tempHeight + extraPx) + "px";
      } else if (this.data.length <= 4) {
        extraPx = 100;
        this.totalColHeight = String(tempHeight - 300 + extraPx) + "px";
      } else {
        extraPx = 100;
        this.totalColHeight = String(tempHeight / 2 + extraPx) + "px";
      }
    }
  }

  showModal() {
    this.modal.clear();
    const componentFactory =
      this.resolver.resolveComponentFactory(ModalComponent);
    this.modal.createComponent(componentFactory);
  }
}
