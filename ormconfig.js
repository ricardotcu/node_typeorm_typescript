console.log(process.env.HOST);

module.exports = {
   "type": "postgres",
   "url": "postgres://ptzaywvdyhtqkw:d963201e9029bacbc658c40135d68338c39bef227666dfabba353d283866efb1@ec2-34-195-169-25.compute-1.amazonaws.com:5432/d5b35v05g14tep",
   ssl: {
      rejectUnauthorized: false
   },
   "synchronize": true,
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