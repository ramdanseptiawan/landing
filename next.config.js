const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])
module.exports = withTM({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.module.rules.push({
            test: /\.png|jpeg|pdf|mp4$/,
            use: ['url-loader'],
        });
        return config;
    }
})