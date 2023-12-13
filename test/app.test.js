const request = require("supertest");
const app = require("../src/app");

describe("Product API", () => {
  beforeAll(async () => {
    await request(app).delete("/category/delete-all");
    await request(app).delete("/product/delete-all");
  });

  it("should create a new product", async () => {
    const response = await request(app).post("/product/create").send({
      title: "Phone",
      description: "Good Phone",
      price: 19.99,
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should create a new product", async () => {
    const response = await request(app).post("/product/create").send({
      title: "Computer",
      description: "Super Computer, Fantastic",
      price: 65.89,
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should create a new product", async () => {
    const response = await request(app).post("/product/create").send({
      title: "Cable",
      description: "Cable for computer",
      price: 1.2,
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should create a new category", async () => {
    const response = await request(app).post("/category/create").send({
      name: "ElectronicsV2",
      description: "Future's technology",
    });

    expect(response.statusCode).toBe(201);
  });

  it("should edit a category", async () => {
    const response = await request(app).patch("/category/edit").send({
      name: "Electronics",
      description: "Electronic Devices",
    });

    expect(response.statusCode).toBe(200);
  });

  it("should edit a product", async () => {
    const response = await request(app).patch("/product/edit").send({
      title: "Phone",
      description: "Better Phone",
      price: 29.99,
      categoryName: "ElectronicsV2",
    });

    expect(response.statusCode).toBe(200);
  });

  it("should get all the products", async () => {
    const response = await request(app).get("/product/all");

    expect(response.statusCode).toBe(200);
    expect(response.body.products.length).toBe(3);
  });

  it("should get filtered products", async () => {
    const response = await request(app).get("/product/").send({
      categoryName: "Electronics",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.products.length).toBe(2);
  });

  it("should delete the product", async () => {
    const response = await request(app).delete("/product/delete").send({
      title: "Phone",
    });

    expect(response.statusCode).toBe(200);
  });

  it("should get all the products", async () => {
    const response = await request(app).get("/product/all");

    expect(response.statusCode).toBe(200);
    expect(response.body.products.length).toBe(2);
  });
});
