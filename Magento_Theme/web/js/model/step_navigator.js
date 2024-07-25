export default {
    testIsItShipping() {
        return /(#shipping|checkout\/)$/.test(window.location.href);
    },

    testIsItPayment() {
        return /(#payment)$/.test(window.location.href)
    },

    defineSteps() {
        return [
            {
                index: 1,
                name: 'Cart',
                state: this.testIsItShipping() ? 'done' : (this.testIsItPayment() ? 'done' : 'active')
            },
            {
                index: 2,
                name: 'Shipping',
                state: this.testIsItShipping() ? 'active' : (this.testIsItPayment() ? 'done' : 'undone')
            },
            {
                index: 3,
                name: 'Payments',
                state: this.testIsItPayment() ? 'active' : 'undone'
            }
        ]
    }
}
