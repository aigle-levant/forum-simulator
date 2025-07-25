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
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                black: "var(--black)",
                white: "var(--white)",
                accent: "var(--accent)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                decor: ["var(--font-decor)"],
            },
        },
    },
    plugins: [],
}
