# Product Catalog API

This API gets calls to create, edit, delete and get the following entities.

```bash
    product (
        id: ObjectId,
        title: String UNIQUE,
        description: String,
        price: Number,
        categoryId: ObjectId REFERS_TO(category)
    )
```

```bash
    category (
        id: ObjectId,
        name: String UNIQUE,
        description: String
    )
```

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- Install packages `npm install`
- Create a database in `mongodb` by following this [website](mongodb.com)
- Copy and paste `.env.example` file and rename it to `.env`
- Get the `connection URI` from the website and put it to `.env`
- You can start the app by `npm start` or if you want to run tests that are in the `test/app.test.js` you can type `npm test`

# Usage

- `!feature` : means the feature is required for the successful transaction. If the feature does not have exclamation mark in front of it, it means that this feature is optional for that json file.

- !!! `title` is unique for `product` and `name` is unique for `category` so be careful. They are like the key of these objects.

- ### Create a Product

  - POST request to `localhost:3000/product/create`
  - req.body -> `{!title, description, !price, !categoryName}`

  ### Get Filtered Products

  - GET request to `localhost:3000/product/`
  - req.body -> `{title, categoryName}`
  - If title and categoryName is provided at the same time, then result should have title as given AND categoryName as given.

  ### Edit a Product

  - PATCH request to `localhost:3000/product/edit`
  - req.body -> `{!title, description, price, categoryName}`
  - will edit the product that has this title.

  ### Delete a Product

  - DELETE request to `localhost:3000/product/delete`
  - req.body -> `{!title}`

  ### Get All Products

  - GET request to `localhost:3000/product/all`
  - req.body -> `{}`

  ### Create a Category

  - POST request to `localhost:3000/category/create`
  - req.body -> `{!name, description}`

  ### Edit a Category

  - PATCH request to `localhost:3000/category/edit`
  - req.body -> `{!name, description}`
  - will edit the category that has this title.

  ### Delete All Products

  - DELETE request to `localhost:3000/product/delete-all`
  - req.body -> `{}`

  ### Delete All Categories

  - DELETE request to `localhost:3000/category/delete-all`
  - req.body -> `{}`
