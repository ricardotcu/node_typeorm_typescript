console.log(process.env.HOST);

module.exports = {
   "type": "postgres",
   "url": "postgres://rmbzjryzugbsxz:fbca763a1f1537c00146203f1a3cb06f724c291d2c503aecf0745bea64a7b0d7@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d2oa3d2llsvran",
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