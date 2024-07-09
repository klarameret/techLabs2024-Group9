import type {Config} from 'tailwindcss';

const config: {
    plugins: (plugin | ((options?: Partial<{ strategy: "base" | "class" }>) => { handler: () => void }))[];
    theme: {
        extend: {
            gridTemplateColumns: { "13": string };
            colors: { blue: { 400: string; 500: string; 600: string }; favoriteColor: { DEFAULT: string } }
        };
        keyframes: { shimmer: { "100%": { transform: string } } }
    };
    content: string[]
} = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            colors: {
                blue: {
                    400: '#2589FE',
                    500: '#0070F3',
                    600: '#2F6FEB',
                },
                favoriteColor : {
                    DEFAULT: 'deeppink',
                },
            },
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
export default config;
