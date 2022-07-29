module.exports = {
    content: ["./src/**/*.html", "./src/**/*.ts"],
    theme: {
        fontFamily: {
            sans: ["Josefin Sans"],
            mono: ["Anonymous Pro"],
            heading: ["Tangerine"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
