class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<div id="side-nav" class="side-nav hidden">
    <ul>
        <li class="item"><a href="../games.html">Games</a></li>
        <li class="item"><a href="../projects.html">Projects</a></li>
        <li class="item"><a href="../art.html">Art</a></li>
    </ul>
</div>

<div class="side-bar">
<div id="hamburger" class="hamburger" onclick="toggleNav()">
    <div></div> 
    <div></div>
    <div></div>
</div>



<a href="mailto:shadeor@miamioh.edu" class="rotate">Shadeor@miamioh.edu</a>    
<a href="https://www.linkedin.com/in/oliviashade/" target="_blank" rel="noopener noreferrer "><img alt="linkedin" src="../images/linkedin-icon.png" class="icon"></a>
</div>
`;
}
}
customElements.define('header-component', Header);