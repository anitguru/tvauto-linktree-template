import { writeFileSync } from "fs";

const fromDomain = process.env.FROM_DOMAIN;
const toDomain = process.env.TO_DOMAIN;

if (!fromDomain || !toDomain) {
  process.exit(0); // Exit gracefully if variables are not set
}

const netlifyToml = `
[[redirects]]
  from = "https://${fromDomain}/*"
  to = "https://${toDomain}/:splat"
  status = 302
  force = true
`;

writeFileSync("netlify.toml", netlifyToml);
console.log("Generated netlify.toml with dynamic domains.");
