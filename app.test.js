const { test, expect } = require("@jest/globals");
const request = require("supertest");
const app = require("./index");

test("GET / should return Hello CI/CD", async () => {
  const res = await request(app)
    .get("/")
    .expect(200);
  expect(res.text).toBe("Hello CI/CD");
});