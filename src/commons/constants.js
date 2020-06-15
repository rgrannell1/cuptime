
const asciichart = require('asciichart')

const constants = {
  bins: {
    '1m': 60 * 1000,
    '5m': 5 * 60 * 1000,
    '15m': 15 * 60 * 1000,
    '1h': 60 * 60 * 1000,
    '24h': 24 * 60 * 60 * 1000
  },
  hosts: [
    {
      name: 'google-dns',
      host: '8.8.8.8',
      colour: asciichart.lightcyan
    },
    {
      name: 'cloudfront-dns',
      host: '1.1.1.1',
      colour: asciichart.lightblue
    }
  ],
  intervals: {
    poll: 4000
  }
}

module.exports = constants
