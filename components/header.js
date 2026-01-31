class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<!--Desktop -->
<div id="side-nav" class="side-nav hidden">
    <ul>
        <li class="item"><a href="../games.html">Games</a></li>
        <li class="item"><a href="../projects.html">Projects</a></li>
        <li class="item"><a href="../art.html">Art</a></li>
    </ul>
</div>

<div class="side-bar">
<div id="hamburger" class="hamburger pointer" onclick="toggleNav()">
    <div></div> 
    <div></div>
    <div></div>
</div>



<div class="desktop-only">
<a classhref="mailto:createdinshade@gmail.com" class="rotate">Createdinshade@gmail.com</a>    
<a href="https://www.linkedin.com/in/oliviashade/" target="_blank" rel="noopener noreferrer "><img alt="linkedin" src="../images/linkedin-icon.png" class="icon"></a>
</div>
</div>



`;
}
}

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

<div class="desktop-only">
<p>© 2023 shadeor.github.io</p> 
</div>


<div class="mobile-only">
<a classhref="mailto:createdinshade@gmail.com">Createdinshade@gmail.com</a>    
<a href="https://www.linkedin.com/in/oliviashade/" target="_blank" rel="noopener noreferrer "><img alt="linkedin" src="../images/linkedin-icon.png" class="icon"></a>
</div>
</div>



`;
}
}


customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
