module.exports = {
  port: 3000,
  ip: 'localhost',
  app: {
    title: 'Brew o Matic',
    version: '1.0-SNAPSHOT'
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
    twitter: {
      consumerKey: '',
      consumerSecret: '',
    },
    google: {
      clientID: '',
      clientSecret: '',
    },
    facebook: {
      clientID: '',
      clientSecret: '',
    },
    github: {
      clientID: '',
      clientSecret: '',
    },
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
    name: '',
    collection: '',
    secret: ''
  },
}
