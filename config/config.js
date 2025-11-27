require('dotenv').config();

// Load environment variables from .env file
module.exports = {
  mongoURI: process.env.MONGO_DB_URI,
  redisUrl: process.env.REDIS_URL,
  jwtSecret: process.env.JWT_SECRET,
  elasticSearchUrl: process.env.ELASTIC_SEARCH_URL,
  postgresUrl: process.env.POSTGRES_URL,
};
