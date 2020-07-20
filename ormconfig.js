console.log(process.env.HOST);

module.exports = {
   "type": "postgres",
   "url": "postgres://pwdxncwzkonbsl:ae087afdf752d4383a7c91d468448e040d05cc474d10fecb2c09a76ff11f5ee2@ec2-54-234-28-165.compute-1.amazonaws.com:5432/df850mjalou21d",
   ssl: {
      rejectUnauthorized: false
   },
   "synchronize": false,
   "logging": false,
   "entities": [
      "dist/entity/**/*.js"
   ],
   "migrations": [
      "dist/migration/**/*.js"
   ],
   "subscribers": [
      "dist/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}