# PRODUCT CATALOG

## Description

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

## Usage
