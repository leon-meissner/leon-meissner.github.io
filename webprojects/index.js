// Web Projects Page - JS

//Custom Elements:

class projPrefab extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                /* Styles go here */
            </style>

            <div class="project">
                <img class="projpic" src="../media/questionmark.png" alt="Wait and see">
                <p class="projdesc">???</p>
            </div>
        `;
    }

}
customElements.define("project-prefab", projPrefab);