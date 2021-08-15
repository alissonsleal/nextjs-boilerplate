const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production' //disable pwa in local

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
