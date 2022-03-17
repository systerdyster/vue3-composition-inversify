module.exports = {
    important: false,
    theme: {
        fontSize: {
            xxs: '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem'
        },

        spacing: {
            '0': '0',
            1: '0.125rem',
            2: '0.25rem',
            3: '0.5rem',
            4: '0.75rem',
            5: '1rem',
            6: '1.5rem',
            7: '2rem',
            8: '2.5rem',
            9: '3rem',
            10: '4rem',
            11: '5rem',
            12: '6rem',
            13: '8rem'
        },

        screens: {
            'xs': '360px',
            'sm': '768px',
            'md': '1024px',
            'lg': '1280px'
        },

        colors: {
            primary: {
                100: '#3F859E',
                200: '#397990',
                300: '#346E83',
                400: '#2F6477',
                500: '#2B5B6C',
                600: '#275261',
                700: '#234A57',
                800: '#20434E',
                900: '#1D3C46'
            },
            secondary: {
                50: '#E0EBE4',
                100: '#537C61',
                200: '#4B7158',
                300: '#446750',
                400: '#3E5E49',
                500: '#385542',
                600: '#324D3B',
                700: '#2D4535',
                800: '#293E30',
                900: '#25382B'
            },
            black: '#000',
            white: '#fff'
        },
        
        lineHeight: {
            xxs: '1rem',
            xs: '1rem',
            sm: '1.5rem',
            base: '1.5rem',
            lg: '1.5rem',
            xl: '1.75rem',
            '2xl': '2rem',
            '3xl': '2.5rem',
            '4xl': '3rem',
            '5xl': '4rem',
            '6xl': '5.25rem',
            normal: 'normal'
        },
        aspectRatio: {
            '4/3': '4 / 3',
            'square': '1 / 1'
        }
    },
    variants: {
        aspectRatio: ['responsive'], // defaults to ['responsive'],
        backgroundColor: ['odd', 'even']
    },
    mode: 'jit',
    content: ['./src/**/*.pug', './src/**/*.ts']
}