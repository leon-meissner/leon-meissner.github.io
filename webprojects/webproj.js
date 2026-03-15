// Web Projects Page - JS

//Custom Elements:

class projPrefab extends HTMLElement {
    static get observedAttributes() {
        return ["projdesc", "projpic", "alt"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const desc = this.getAttribute("projdesc") || "???";
        const pic = this.getAttribute("projpic") || "../media/questionmark.png";
        const alt = this.getAttribute("alt") || "Wait and see";
        const link = this.getAttribute("link") || "";

        this.innerHTML = `
            <a href="${link}" class="projlink" target="_blank" style="text-decoration: none;">
                <div class="project">
                    <img class="projpic" src="${pic}" alt="${alt}">
                    <p class="projdesc">${desc}</p>
                </div>
            </a>
        `;
    }
}

customElements.define("project-prefab", projPrefab);