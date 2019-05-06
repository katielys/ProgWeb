class Bar {

    _updateHeight() {
        this.container.style.height = `${parseInt(this.heightController.value)}px`;
    }
    _updateWidth(pWidth) {
        this.container.style.width = `${pWidth}px`;
        console.log(this.container);
        this.container.style.left = `${(pWidth+5) * parseInt(this.container.getAttribute('xindex'))}px`;
    }

    constructor(pDOMel, pDOMcont) {
        this.container = pDOMel;
        this.heightController = pDOMcont;

        this.heightController.onkeyup = (el) => {
            this._updateHeight();
        }

        this._updateHeight();

    }
}

let bars = [
    new Bar(document.getElementById("bar1"), document.getElementById("bar1_height")),
    new Bar(document.getElementById("bar2"), document.getElementById("bar2_height")),
    new Bar(document.getElementById("bar3"), document.getElementById("bar3_height")),
    new Bar(document.getElementById("bar4"), document.getElementById("bar4_height"))
];

function updateBarsWidth(e) {
    for (let el of bars) {
        el._updateWidth(parseInt(e.value));
    }
}

let widthController = document.getElementById("bar_width");

widthController.onkeyup = (e) => {
    updateBarsWidth(widthController);
}

updateBarsWidth(widthController);