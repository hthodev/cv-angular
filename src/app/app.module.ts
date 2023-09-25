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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LobbyComponent,
    InfoComponent,
    WorkExperienceComponent,
    ProjectPersonalComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
