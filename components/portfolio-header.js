class NavHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="main-nav">
<a class="current" href="../index.html">Portfolio</a>
<a href="../about.html">About</a>   

<a class="toggle light-mode pointer" id="light-mode" type="button" onclick="displayLightMode()"><i class="fas fa-sun"></i></a>

<a class="toggle dark-mode pointer" id="dark-mode" type="button" onclick="displayDarkMode()"><i class="fas fa-moon"></i></a>

</nav>`
    }
}
customElements.define('nav-component', NavHeader);

