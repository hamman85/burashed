import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-responsive-header',
	templateUrl: './ResponsiveHeader.component.html',
	styleUrls: ['./ResponsiveHeader.component.scss']
})
export class ResponsiveHeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {

  	// Risponsive header social icon 
	window.onscroll= function(){
		if(document.body.scrollTop >=50 || document.documentElement.scrollTop > 50){ 
			var divs = document.querySelectorAll('#social-icons > li:not(.share)');
			for (var i = 0; i < divs.length; i++) {
				divs[i].className += " hidden",
				divs[i].classList.remove('show')
			}
		}
	}

	document.getElementById('share').addEventListener("click",show);
	function show(){
		var divs = document.querySelectorAll('#social-icons > li:not(.share)');
		for (var i = 0; i < divs.length; i++) {
			divs[i].classList.toggle("show");
			divs[i].classList.toggle("hidden");
		}
	}
		// Responsive header menu open and close 
		var header=document.getElementsByClassName("burger-container")
		for(var i = 0; i < header.length; i++ ){
			header[i].addEventListener("click",headerToggle)
		}
		function headerToggle(){
			var tog = document.getElementsByClassName("header")
				for( var j = 0; j < tog.length;j++ ){
					tog[j].classList.toggle("menu-opened");
					tog[j].classList.toggle("body-scroll-stop");
				}						
		}
	}
}