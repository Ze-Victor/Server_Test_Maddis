module.exports = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    email: { type: "string", format: "email" },
    user: { type: "string" },
    password: { type: "string" }
  },
  required: ["name", "email", "user", "password"],
  additionalProperties: false,
}