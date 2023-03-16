class NavHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<nav class="main-nav">
<a href="index.html">Portfolio</a>
<a class="current" href="about.html">About</a>    

<a class="toggle light-mode pointer" id="light-theme" type="button" onclick="displayLightMode()"><i class="fas fa-sun"></i></a>

<a class="toggle dark-mode pointer" id="dark-theme" type="button" onclick="displayDarkMode()"><i class="fas fa-moon"></i></a>

</nav>`;
}
}
customElements.define('nav-component', NavHeader);