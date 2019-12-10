import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Header/Header/Header.component';
import { HomeComponent } from './Widgets/Slider/Home/Home.component';
import { MenuComponent } from './Core/Menu/Menu.component';
import { StickyheaderComponent } from './Core/Header/StickyHeader/StickyHeader.component';
import { HttpClientModule } from '@angular/common/http';
import { AnglyService } from './Services/Angly.service';
import { WidgetsModule } from  './Widgets/widgets.module';
import { ResponsiveHeaderComponent } from './Core/Header/ResponsiveHeader/ResponsiveHeader.component';
import { MainComponent } from './Main/Main.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionOneComponent } from './home/section-one/section-one.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { SectionThreeComponent } from './home/section-three/section-three.component';
import { SectionFourComponent } from './home/section-four/section-four.component';
import { SectionFiveComponent } from './home/section-five/section-five.component';
import { SectionSixComponent } from './home/section-six/section-six.component';
import { SectionSevenComponent } from './home/section-seven/section-seven.component';

@NgModule({
  declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		MenuComponent,
		StickyheaderComponent,
		ResponsiveHeaderComponent,
		MainComponent,
		SectionOneComponent,
		SectionTwoComponent,
		SectionThreeComponent,
		SectionFourComponent,
		SectionFiveComponent,
		SectionSixComponent,
		SectionSevenComponent
  ],
  	imports: [
		BrowserModule,
		HttpClientModule,
		WidgetsModule,
		AppRoutingModule,
		RouterModule,
		SlickCarouselModule,
		FormsModule,
		LoadingBarRouterModule
  ],
  providers: [AnglyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
