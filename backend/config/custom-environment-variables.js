module.exports = {
  port: 'PORT',
  ip: 'IP',
  app: {
    title: 'APP_TITLE',
    version: 'APP_VERSION',
    url: 'APP_URL'
  },
  logging: {
    morgan: {
      format: 'LOGGING_MORGAN_FORMAT'
    },
    console: {
      level: 'LOGGING_CONSOLE_LEVEL'
    }
  },
  auth: {
    twitter: {
      consumerKey: 'AUTH_TWITTER_CONSUMER_KEY',
      consumerSecret: 'AUTH_TWITTER_CONSUMER_SECRET',
    },
    google: {
      clientID: 'AUTH_GOOGLE_CLIENT_ID',
      clientSecret: 'AUTH_GOOGLE_CLIENT_SECRET',
    },
    facebook: {
      clientID: 'AUTH_FACEBOOK_CLIENT_ID',
      clientSecret: 'AUTH_FACEBOOK_CLIENT_SECRET',
    },
    github: {
      clientID: 'AUTH_GITHUB_CLIENT_ID',
      clientSecret: 'AUTH_GITHUB_CLIENT_SECRET',
    },
    linkedin: {
      clientID: 'AUTH_LINKEDIN_CLIENT_ID',
      clientSecret: 'AUTH_LINKEDIN_CLIENT_SECRET',
    }
  },
  db: {
    uri: 'DB_URI',
    options: {
      useMongoClient: 'DB_OPTIONS_USE_MONGO_CLIENT'
    },
    debug: 'DB_DEBUG'
  },
  sessions: {
    cookie: {
      maxAge: 'SESSIONS_COOKIE_MAX_AGE',
      httpOnly: 'SESSIONS_COOKIE_HTTP_ONLY',
      secure: 'SESSIONS_COOKIE_SECURE'
    },
    name: 'SESSIONS_NAME',
    collection: 'SESSIONS_COLLECTION',
    secret: 'SESSION_SECRET'
  },
}
