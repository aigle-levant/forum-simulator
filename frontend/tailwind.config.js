/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./src/**/*.component.{html,ts}",
        "./src/app/**/*.{html,ts}",
        "./src/components/**/*.{html,ts}",
        "./src/pages/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            colors: {
                red: "var(--color-red)",
                lightred: "var(--color-light-red)",
                black: "var(--color-black)",
                white: "var(--color-white)",
                grey: "var(--color-grey)"
            },
            fontFamily: {
                reddit: "var(--font-reddit)",
            },
        },
    },
    plugins: [],
}
