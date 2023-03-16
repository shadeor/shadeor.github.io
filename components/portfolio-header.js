class NavHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="main-nav">
<a class="current" href="../index.html">Portfolio</a>
<a href="../about.html" id="about">About</a>   

<a class="toggle light-mode pointer" id="light-theme" type="button" onclick="displayLightMode()"><i class="fas fa-sun"></i></a>

<a class="toggle dark-mode pointer" id="dark-theme" type="button" onclick="displayDarkMode()"><i class="fas fa-moon"></i></a>

</nav>`
    }
}
customElements.define('nav-component', NavHeader);

