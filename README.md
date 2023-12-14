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

- Below the port 3000 is used but you can change the port as you wish. If you change the port then you will make calls to `localhost:PORT`

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

## Additional Things and Feedback

- I did not write comments because there was no complex logic. Instead, I tried to assign good and self explanatory variable and function names.

- It is not very clear whether the category is model or not. If it is a model (I took it in that way), you may explain its features.

- The test may should include more complex queries or algorithms and you can give the structure beforehand to balance the test.

- I had not known how to implement unit tests and jest so hopefully I learnt it well and implemented it well.

- I love to build things and the test was building something so I enjoyed it.
