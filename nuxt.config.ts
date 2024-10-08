// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Lato: {
                        wght: [300, 400, 700],
                        ital: [300],
                    },
                },
            },
        ],
        '@nuxt/icon',
        '@pinia/nuxt',
        [
            '@vee-validate/nuxt',
            {
                // disable or enable auto imports
                autoImports: true,
            },
        ],
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: 'Ui',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
    pinia: {
        storesDirs: ['./store/**'],
    },
});
