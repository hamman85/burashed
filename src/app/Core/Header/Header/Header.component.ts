import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './Header.component.html',
	styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

	headerIcon = [
		{
			class:"facebook",
			icon :"fab fa-facebook-f"
		},
		{
			class:"twitter",
			icon :"fab fa-twitter"
		},
		{
			class:"linkedin",
			icon :"fab fa-linkedin-in"
		},
		{
			class:"yelp",
			icon :"fab fa-yelp" 
		}
	];

	constructor() { }

	ngOnInit() {

		//  this method is run when click on search box in header section for toggel class 
		var search=document.getElementsByClassName("search-icon")

		for(var i = 0; i < search.length; i++ ){
			search[i].addEventListener("click",addClass)
		}

		function addClass(){
			var tog = document.getElementsByClassName("search-utility")
			for( var j = 0; j < tog.length;j++ ){
				if(!tog[j].classList.contains("search-open")) {
					tog[j].className += " search-open";
				}
			}
		}

		var search = document.getElementsByClassName("search-close-btn")

		for(var i = 0; i < search.length; i++ ){
			search[i].addEventListener("click",removeClass)
		}

		function removeClass(){
			var tog1 = document.getElementsByClassName("search-utility")
			for( var j = 0; j < tog1.length;j++ ){
				tog1[j].classList.remove("search-open");
			}
		}

	}
}

 