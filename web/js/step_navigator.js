import Item from './items/step_navigator_item.js';
import stepModel from './model/step_navigator.js';

let steps = stepModel.defineSteps();

window.addEventListener('hashchange', () => {
        new Promise((resolve, reject) => {
            try {
                resolve(stepModel.defineSteps());
            } catch (e) {
                reject(e);
            }
        }).then((data) => {
            document.querySelectorAll('step-navigator-item').forEach((item, index) => {
                item.update(data[index].state);
            });
        }).catch((e) => {
            console.error(e);
        })
    },
);

const separatorTemplate =
    `<li class="flex flex-col gap-2 relative">
        <div class="relative h-14 w-24 flex items-center justify-center">
            <div class="bg-strokeBlue flex items-center justify-center rounded-full w-6 h-6">
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.310169 0.952474C0.573667 0.682509 1.01728 0.682509 1.27744 0.952474L3.89241 3.51548C4.17258 3.77545 4.17258 4.22206 3.89241 4.48202L1.27744 7.04503C1.01728 7.31833 0.570331 7.31833 0.310169 7.04503C0.0333291 6.78506 0.0333291 6.34178 0.310169 6.08182L2.43149 3.98875L0.313504 1.91235C0.0333291 1.65572 0.0333291 1.20911 0.313504 0.949141L0.310169 0.952474Z" fill="#24272B"/>
                </svg>
            </div>
        </div>
    </li>`;

let items = '';

Array.prototype.map.call(steps, (item, index) => {
    items += `<step-navigator-item data=${JSON.stringify(item)}></step-navigator-item>${index < steps.length-1 ? separatorTemplate : ''}`;
});

const template =
    `<ul class="new-navigator flex relative max-content overflow-hidden p-[1px] max-w-max">
        ${items}
    </ul>`;

class StepNavigator extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = template;
    }
}

customElements.define('step-navigator', StepNavigator);
customElements.define('step-navigator-item', Item);
