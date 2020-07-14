console.log(process.env.HOST);

module.exports = {
   "type": "postgres",
   "url": "postgres://lxqfefgjlvlfiu:2bf1d76fcaff3f39c38a4cde6466e14f04bc94fa66fa890f4a4cc85876d16409@ec2-54-161-208-31.compute-1.amazonaws.com:5432/dba0tulgo0gd63",
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