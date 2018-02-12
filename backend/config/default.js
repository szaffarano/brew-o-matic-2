module.exports = {
  port: 3000,
  ip: 'localhost',
  publicPath: 'public',
  app: {
    title: 'Brew o Matic',
    version: '1.0-SNAPSHOT',
    url: ''
  },
  logging: {
    morgan: {
      format: 'short'
    },
    console: {
      level: 'debug'
    }
  },
  auth: {
    // https://apps.twitter.com/app/
    twitter: {
      consumerKey: '',
      consumerSecret: '',
    },
    // https://console.developers.google.com/apis/dashboard
    google: {
      clientID: '',
      clientSecret: '',
    },
    // https://developers.facebook.com/apps/
    facebook: {
      clientID: '',
      clientSecret: '',
    },
    // https://github.com/settings/developers
    github: {
      clientID: '',
      clientSecret: '',
    },
    // https://www.linkedin.com/secure/developer
    linkedin: {
      clientID: '',
      clientSecret: '',
    }
  },
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/bom2-dev',
    options: {
      useMongoClient: true
    },
    debug: true
  },
  sessions: {
    cookie: {
      maxAge: 7 * 24 * (60 * 60 * 1000),
      httpOnly: true,
      secure: false
    },
    name: 'DevSessions',
    collection: 'sessions',
    secret: 'changeme'
  },
}
