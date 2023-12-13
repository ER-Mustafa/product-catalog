const request = require("supertest");
const app = require("../src/app");

describe("Product API", () => {
  beforeAll(async () => {
    await request(app).delete("/category/delete-all");
    await request(app).delete("/product/delete-all");
  });

  it("should create a new product", async () => {
    const response = await request(app).post("/product/create").send({
      title: "Test Product",
      description: "Test Description",
      price: 19.99,
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should create a new category", async () => {
    const response = await request(app).post("/category/create").send({
      name: "Food",
      description: "Test Description for Food",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should edit a category", async () => {
    const response = await request(app).patch("/category/edit").send({
      name: "Electronics",
      description: "Edited Description for Electronics",
    });

    expect(response.statusCode).toBe(200);
  });

  it("should edit a product", async () => {
    const response = await request(app).patch("/product/edit").send({
      title: "Test Product",
      description: "Edited Description",
      price: 29.99,
      categoryName: "Food",
    });

    expect(response.statusCode).toBe(200);
  });
});
