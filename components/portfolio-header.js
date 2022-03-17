class NavHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="main-nav">
<a class="current" href="../index.html">Portfolio</a>
<a href="../about.html">About</a>    
</nav>`
    }
}
customElements.define('nav-component', NavHeader);