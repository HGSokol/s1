/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Raleway"],
                bodyalt: ["SF Pro Display"],
            },
            keyframes: {
                wiggle: {
                    "0%": { display: "none", opacity: "0" },
                    "80%": { display: "none", opacity: "0" },
                    "100%": { display: "block", opacity: "1" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out",
            },
            boxShadow: {
                card: "0px 0px 20px rgba(223, 223, 223, 0.15)",
                drop: "0px 4px 14px rgba(133, 133, 133, 0.1)",
                sm: "0px 6.515px 6.624px 0px rgba(0, 0, 0, 0.12);",
                l: "0px 15.419px 15.676px 0px rgba(0, 0, 0, 0.12)",
                dsm: "0px 0.86px 1.719px -3.439px rgba(0, 0, 0, 0.25)",
                dl: "0px 0.86px 1.719px -3.439px rgba(0, 0, 0, 0.25)",
            },
            dropShadow: {
                drop: "0px 4px 14px rgba(133, 133, 133, 0.1)",
                dropActive: "0px 4px 14px rgba(255, 183, 0, 0.1)",
            },
        },
    },
    plugins: [],
};
