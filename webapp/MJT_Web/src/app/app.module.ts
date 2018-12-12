//built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule} from '@agm/core';

//component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ChangeprofileComponent } from './user/changeprofile/changeprofile.component';

//routes
import { appRoutes } from './routes';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { UploadComponent } from './upload/upload.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { BoardComponent } from './board/board.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { UploadService } from './shared/upload.service';
import { NavbarComponent } from './navbar/navbar.component';
import { OtherprofileComponent } from './otherprofile/otherprofile.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserlistComponent } from './userlist/userlist.component';
// import { Observable } from 'rxjs/Observable';
//other
// import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserprofileComponent,
    SignInComponent,
    UploadComponent,
    GooglemapComponent,
    BoardComponent,
    // Observable
    NavbarComponent,
    ChangeprofileComponent,
    OtherprofileComponent,
    RestaurantComponent,
    UserlistComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLPpUYp-RdW9_j1ijvhN-f28QnVuBH_fQ'
    }),
    NgFlashMessagesModule
  ],
  
  providers: [UserService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
