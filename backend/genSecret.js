/**
 * The function generates a random JWT secret of a specified length using the crypto module in Node.js.
 * @param [length=32] - The `length` parameter in the `generateJwtSecret` function is used to specify
 * the number of bytes to generate for the random secret key. In this case, the default length is set
 * to 32 bytes if no value is provided when calling the function.
 * @returns A randomly generated JWT secret of length 32 characters in hexadecimal format is being
 * returned.
 */
import  crypto  from "crypto";

function generateJwtSecret(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}

const jwtSecret = generateJwtSecret(32);
console.log(jwtSecret);

// run the following on terminal

// node genSecret.js

