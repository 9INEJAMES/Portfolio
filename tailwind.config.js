// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark', 'cupcake'], // or whatever themes you prefer
    },
}
