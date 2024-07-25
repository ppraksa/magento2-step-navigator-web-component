class StepNavigatorItemState extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let template = '';
        const state = this.getAttribute('state');
        const step = this.getAttribute('step');

        switch (state) {
            case 'done':
                template = `<div class="relative h-14 w-14 flex items-center justify-center step-cart">
            <div class="absolute border-2 border-strokeBlue bg-white h-10 w-10 block rounded-sm rotate-45 box-border">
            </div>
            <svg class="fill-fourth z-10" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2388 0.60541C15.5609 -0.115246 14.252 -0.0798038 13.6325 0.60541L6.77205 7.54024L3.99046 4.76395C3.31259 4.01966 1.96854 4.06692 1.38417 4.71669C1.02186 5.0593 0.799805 5.54367 0.799805 6.06349C0.799805 6.58331 1.01018 7.06768 1.34911 7.38666L5.41631 11.4979C5.75525 11.8642 6.23443 12.0886 6.74867 12.0886C7.26292 12.0886 7.7421 11.876 8.05766 11.5334L16.2154 3.28719C16.5777 2.94459 16.7998 2.46021 16.7998 1.94039C16.7998 1.42058 16.6011 0.959831 16.2505 0.617224L16.2388 0.60541Z" fill="#E6002A"/>
            </svg>
        </div>`;
                break;
            case 'active':
                template = `<div class="relative h-14 w-14 flex items-center justify-center step-shipping">
            <div class="absolute border-2 border-fourth bg-fourth h-10 w-10 block rounded-sm rotate-45 box-border">
            </div>
            <span class="relative z-10 text-xl text-white font-bold">${step}</span>
        </div>`;
                break;
            default:
                template = `<div class="relative h-14 w-14 flex items-center justify-center step-payments">
            <div class="absolute border-2 border-strokeBlue bg-strokeBlue h-10 w-10 block rounded-sm rotate-45 box-border">
            </div>
            <span class="relative z-10 text-xl text-white font-bold">${step}</span>
        </div>`;
        }

        this.innerHTML = template;
    }
}

export default StepNavigatorItemState;
