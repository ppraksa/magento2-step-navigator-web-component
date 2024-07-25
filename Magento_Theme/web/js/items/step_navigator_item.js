import StepNavigatorItemState from './item/state.js';

class StepNavigatorItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.data = JSON.parse((this.getAttribute('data')));

        this.render();
    }

    update(state) {
        this.render(state);
    }

    render() {
        const arg = arguments[0];

        console.log(this.data);

        this.innerHTML =
            `<li class="flex flex-col gap-2 relative">
                <step-navigator-item-state step=${this.data.index}
                state=${typeof arg !== 'undefined' ? arg : this.data.state}></step-navigator-item-state>
                <span class="text-sm text-center">${this.data.name}</span>
            </li>`;
    }
}

customElements.define('step-navigator-item-state', StepNavigatorItemState);

export default StepNavigatorItem;
