module.exports = {
  type: "object",
  properties: {
    id: { type: "integer" },
    title: { type: "string" },
    description: { type: "string" },
    content: { type: "string" },
    user_id: { type: "integer" }

  },
  required: ["title", "description", "content", "user_id"],
  additionalProperties: false,
}