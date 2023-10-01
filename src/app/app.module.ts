import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LobbyComponent } from './lobby/lobby.component';
import { InfoComponent } from './info/info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectPersonalComponent } from './project-personal/project-personal.component';
import { AvatarComponent } from './info/avatar/avatar.component';
import { PracticalProjectComponent } from './practical-project/practical-project.component';
import { AwardComponent } from './award/award.component';
import { HobbieComponent } from './hobbie/hobbie.component';
import { SummaryComponent } from './summary/summary.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LobbyComponent,
    InfoComponent,
    WorkExperienceComponent,
    ProjectPersonalComponent,
    AvatarComponent,
    PracticalProjectComponent,
    AwardComponent,
    HobbieComponent,
    SummaryComponent,
    ScrollUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
