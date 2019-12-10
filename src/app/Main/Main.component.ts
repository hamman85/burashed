import { Component, OnInit,HostListener } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './Main.component.html',
	styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

 	ngOnInit() {
		document.getElementById("return-to-top").style.display="none";
 	}

	@HostListener('window:scroll', ['$event'])
	
	// this method work for scroll skicky header and back to top button  
	onScrollEvent($event) {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		if (scrollTop >= 200) {
         if(!document.getElementById('header-sticky').classList.contains('visible')){
            document.getElementById('header-sticky').className += " visible";
         }
      }  else {
         document.getElementById('header-sticky').classList.remove("visible");
      }


	  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
				document.getElementById("return-to-top").style.display="block";				
			}
		else{
			document.getElementById("return-to-top").style.display="none";	
		} 

		document.getElementById("return-to-top").addEventListener("click",scrollToTop);
		
		function scrollToTop () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
}