module.exports = {
    port: 3000,
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
        name: "sessionId",
        collection: "sessions"
    },
}