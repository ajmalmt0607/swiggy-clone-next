/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                custom: "0 15px 40px -20px rgba(40, 44, 63, .15)",
            },
            padding: {
                custom: "auto",
            },
            screens: {
                sm: "480px",
                md: "768px",
                lg: "1200px",
                xl: "1600px",
            },
            colors: {
                "font-color": "rgba(2, 6, 12, 0.75)",
                "address-color": "rgba(2, 6, 12, 0.6)",
                "footer-color": "rgba(255, 255, 255, 0.6);",
                "custom-gray": "#d4d5d9",
                "modal-1": "#282c3f",
                "modal-2": "#93959f;",
                "login-terms": "#686b78",
            },
            backgroundColor: {
                "footer-bg-1": "rgb(240, 240, 245);",
            },
        },
    },
    plugins: [],
};
