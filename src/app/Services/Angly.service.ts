import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { PortfolioPopupComponent } from '../Widgets/PopUp/PortfolioPopup/PortfolioPopup.component';
// import { ItinerariesPopupComponent } from '../Widgets/PopUp/ItinerariesPopup/ItinerariesPopup.component';

@Injectable({
	providedIn: 'root'
})
export class AnglyService {

	constructor(private http: HttpClient,
		private modalService: NgbModal) { }

	//This method Used to Get About Data Form About.json File 
	getAboutData() {
		return this.http.get("assets/data/aboutdata.json")
			.map(response => response)
	}

	//This method Used to Get Service Data Form provideservice.json File
	getServiceData() {
		return this.http.get("assets/data/provideserviedata.json")
			.map(response => response)
	}

	//getTestimonialData method Used to Get Reviews Data Form reviews.json File
	getTestimonialData() {
		return this.http.get("assets/data/testimonial.json")
			.map(response => response)
	}

	//This method Used to Get Blog Data Form blogdata.json File
	getBlogData() {
		return this.http.get("assets/data/blogdata.json")
			.map(response => response)
	}

	//This method Used to Get TotalWork Data Form totalwork.json File
	getTotalWork() {
		return this.http.get("assets/data/totalwork.json")
			.map(response => response)
	}

	//This method Used to Get Clients Data Form clients.json File
	getclients() {
		return this.http.get("assets/data/clients.json")
			.map(response => response)
	}

	//This method Used to Get HomeSlider Data Form homeslider.json File
	getHomeSlider() {
		return this.http.get("assets/data/homeslider.json")
			.map(response => response)
	}

	//This method Used to Get Portfolio Data Form portfolio.json File
	getportfolio() {
		return this.http.get("assets/data/portfolio.json")
			.map(response => response)
	}

	/**
	  * openPortfolioDialog method is used to open a porfolio pop up.
	  */
	// openPortfolioDialog(data) {
	// 	const modalRef = this.modalService.open(PortfolioPopupComponent);
	// 	modalRef.componentInstance.data = data;
	// }

	/**
	  * openTravelItineriariesDialog method is used to open a travel Itineriaries pop up.
	  */
	openTravelItineriariesDialog() {
		// const modalRef = this.modalService.open(ItinerariesPopupComponent);
	}

	//getPricingContent method Used to get pricing data form pricing.json file.
	getPricingContent() {
		return this.http.get("assets/data/pricing.json")
			.map(response => response)
	}

}
