import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenResolutionService {
  constructor() {}
  public getWidth() {
    return window.innerWidth;
  }
  public getHeight() {
    return window.innerHeight;
  }

  public getScreenResolution() {
    return [this.getWidth(), this.getHeight()];
  }
}
