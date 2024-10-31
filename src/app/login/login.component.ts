import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword:any

  togglePasswordVisbility(){
    this.showPassword=!this.showPassword
  }
  styleEmailField(event:any){
    const element=event.target as HTMLInputElement
    if (element){
      element.placeholder=""
    }
    const parentelement:HTMLElement=event.target.parentElement
    console.log(parentelement)
    if (parentelement){
      parentelement.style.border="2px solid blue"
    }
    const emailtext=document.getElementById("email-text")
    if (emailtext && element?.value.length==0){
      emailtext.style.display="block"
      
      emailtext.animate(
        [
          {top:"28px"},
          {top:"3px"},
          
        ],
        
          {
            duration:300,
            fill:"forwards"
          }
        
        
      )
      emailtext.classList.toggle("font-size-change")
    }
    
  }

  restyleEmailField(event:any){
    const parentelement:HTMLElement=event.target.parentElement
    console.log(parentelement)
    if (parentelement){
      parentelement.style.border="2px solid gray"
      parentelement.style.borderBottom="1px solid gray"
    }
    const element=event.target as HTMLInputElement
    if (element && element.value.length==0){
      const emailtext=document.getElementById("email-text")
      emailtext?.classList.toggle("font-size-change")
      if (emailtext){
        emailtext.animate(
          [
            {top:"3px"},
            {top:"23px"}
          ],
          {
            duration:300,
            fill:"forwards"
            
          }
        )

        setTimeout(() => {
          emailtext.style.display="none"
          element.placeholder="Email"
        }, 300);
      }
     
    }

    
    
  }

  stylePasswordField(event:any){
    const parentelement:HTMLElement=event.target.parentElement.parentElement
    console.log(parentelement)
    if (parentelement){
      parentelement.style.border="2px solid blue"
    }
    const element=event.target as HTMLInputElement
    if (element){
      element.placeholder=""
    }
    const passwordtext=document.getElementById("password-text")
    
    if (passwordtext && element?.value.length==0)
    {
      passwordtext.style.display="block"
      passwordtext.classList.toggle("font-size-change")
      passwordtext.animate(
        [
          {top:"8px"},
          {top:"-12px"}
        ],
        {
          duration:300,
          fill:"forwards"
        }
      )
    }
    
  }

  
  restylePasswordField(event:any){
    
    const parentelement:HTMLElement=event.target.parentElement.parentElement
    console.log(parentelement)
    if (parentelement){
      parentelement.style.border="2px solid gray"
      parentelement.style.borderTop="1px solid gray"
    }
    const passwordtext=document.getElementById("password-text")
    const element=event.target as HTMLInputElement
    if (element && element?.value.length==0){
      passwordtext?.classList.toggle("font-size-change")
      if (passwordtext){
        passwordtext.animate(
          [
            {top:"-12px"},
            {top:"8px"}
          ],
          {duration:300,
          fill:"forwards"}
        )
        setTimeout(()=>{
          passwordtext.style.display="none"
            element.placeholder="Password"
        },300)
  
        }
      }
      
    }

    showDropDown(event:any){

      const parentelement:HTMLElement=event.target.parentElement
      parentelement.classList.toggle("show")
      
    }
    @HostListener ('window:click', ['$event'])
      onClickedOutside(event:any){
        if (!event.target.matches('.dropdown-btn')) {

          const customdropdown=document.querySelector('.custom-dropdown')
          customdropdown?.classList.remove('show');
        }
      }

      selectOption(event:any) {
        const dropdownbutton=document.querySelector('#option-text')
        if (dropdownbutton){
          dropdownbutton.textContent = event.target.textContent;
        }
        const customdropdown=document.querySelector('.custom-dropdown')
        customdropdown?.classList.remove('show');
      }
    }

    
    

  

