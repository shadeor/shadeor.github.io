class NavHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<nav class="main-nav">
<a href="index.html">Portfolio</a>
<a class="current" href="about.html">About</a>    
</nav>`;
}
}
customElements.define('nav-component', NavHeader);