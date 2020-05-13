import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputButtonComponent } from './components/input-button/input-button.component';
import { MapComponent } from './components/map/map.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PortfolioGalleryComponent } from './components/portfolio-gallery/portfolio-gallery.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipe/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    InputTextComponent,
    InputButtonComponent,
    MapComponent,
    SocialButtonsComponent,
    NavbarComponent,
    UserCardComponent,
    ProgressBarComponent,
    PortfolioGalleryComponent,
    ModalComponent,
    KeysPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AboutComponent,
    ResumeComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    ModalComponent,
  ]
})
export class AppModule {}
