/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/github',
                destination: '/api/github',
                permanent: true,
            },
            {
                source: '/',
                destination: '/api/else',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
