import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    event.target.innerWidth;
    console.log(event.target.innerWidth)
    if (event.target.innerWidth>992){
      const navbar=document.getElementById("navbar")
      if (navbar ){
          navbar.style.display="block"
        }

    }
    else if(event.target.innerWidth<992){
      const navbar=document.getElementById("navbar")
      if (navbar ){
          navbar.style.display="none"
          navbar.classList.remove("mobile-nav")
          window.onscroll=function(){
        
          }
          
        }

    }

    
  }
  

      @HostListener('window:click', ['$event'])
      onClickedOutside(event: any) {
        const navbar=document.querySelector('.mobile-nav') as HTMLElement    
        
        if (navbar){
          if(!navbar.contains(event.target) && !event.target.matches('.navbar-button')) {
            navbar.style.display = "none";
            navbar.classList.remove("mobile-nav")
            window.onscroll=function(){
        
            }
          }
        } 
      }

  showNavbar(){
    const navbar=document.getElementById("navbar")
    if (navbar ){
      
        navbar.style.display="block"
        navbar.classList.add("mobile-nav")
        const scrollTop=window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft=window.pageXOffset || document.documentElement.scrollLeft
    window.onscroll=function(){
      window.scrollTo(scrollLeft,scrollTop)
    }
      }

      
    
  }
  closeNavbar(){
    const navbar=document.getElementById("navbar")
    if (navbar){
      navbar.style.display="none"
      navbar.classList.remove("mobile-nav")
      window.onscroll=function(){
        
      }
    }

  }
  
}
