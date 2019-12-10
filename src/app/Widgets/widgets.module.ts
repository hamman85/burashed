import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';


import { RequestQuoteComponent } from '../Widgets/RequestQuote/RequestQuote.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RequestQuoteFormComponent } from '../Widgets/Form/RequestQuoteForm/RequestQuoteForm.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HeaderContentBlockComponent } from './HeaderContectBlock/HeaderContectBlock.component';


@NgModule({
	declarations: [   
		RequestQuoteComponent,
		RequestQuoteFormComponent,
		HeaderContentBlockComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		SlickCarouselModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule.forRoot(),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
		})
	],
	exports:[
		RequestQuoteComponent,
		RequestQuoteFormComponent,
		HeaderContentBlockComponent
	],
	entryComponents : [

	],
	providers: [
		NgbActiveModal
	]
})
export class WidgetsModule { }

