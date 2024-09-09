import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  console.error("Error loading .env file", result.error);
} else {
  console.log("Loaded .env file:", result.parsed);
}

console.log(process.env.PORT); // Should output the value from .env
