module.exports = {
    target: "serverless",
    reactStrictMode: true,
    // assetPrefix: '/memberships/assets',
    // rewrites() {
    //     return [
    //         { source: '/memberships/assets/_next/:path*', destination: '/_next/:path*' }
    //     ]
    // }
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: {
                                removeViewBox: false,
                            },
                        },
                    },
                },
            ],
        });

        if (!isServer) {
            config.node = { fs: 'empty', module: 'empty' }
          }

        return config;
    },
};
