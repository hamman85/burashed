import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-request-quote',
	templateUrl: './RequestQuote.component.html',
	styleUrls: ['./RequestQuote.component.scss']
})
export class RequestQuoteComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	var quote=document.getElementsByClassName("quote-fixed")
		for(var i = 0; i < quote.length; i++ ){
			quote[i].addEventListener("click",quoteToggle)
		}
			function quoteToggle(){
				var tog = document.getElementsByClassName("quote-wrapper")
					for( var j = 0; j < tog.length;j++ ){
						tog[j].classList.toggle("quote-in");
					}
			}


	var quoteToggleClose=document.getElementsByClassName("quote-closed")
		for(var i = 0; i < quoteToggleClose.length; i++ ){
			quoteToggleClose[i].addEventListener("click",quoteToggleRemove)
		}
			function quoteToggleRemove(){
				var togClose = document.getElementsByClassName("quote-wrapper")
					for( var j = 0; j < togClose.length;j++ ){
						togClose[j].classList.remove("quote-in");
					}
			}
	}
}
 