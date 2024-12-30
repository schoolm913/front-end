//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//--------------------------------------------------------------------------------------------------------------------------
// 3rd party imports
//--------------------------------------------------------------------------------------------------------------------------
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


//--------------------------------------------------------------------------------------------------------------------------
// Local imports
//--------------------------------------------------------------------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SplashScreenComponent } from "./shared/splash-screen/splash-screen.component";
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { UserPanelComponent } from './navigation/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SplashScreenComponent,
    ToolbarComponent,
    AvatarComponent
    
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
