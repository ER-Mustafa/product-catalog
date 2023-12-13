const request = require("supertest");
const app = require("../src/app");

describe("Product API", () => {
  it("should create a new product", async () => {
    const response = await request(app).post("/product/create").send({
      title: "Test Product",
      description: "Test Description",
      price: 19.99,
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(201);
  });
});
