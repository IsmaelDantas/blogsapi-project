# Blogs-API (Node.js)

## Description
In the **Blogs-API** Project, we and all students of my class on trybe had to make an **RESTful API** to handle **CRUD** (Create, Read, Update, Delete) actions in the context of a blogging site. The application was built on the **MSC** (Models, Services and Controllers) architecture to ensure more organization and security. The users of the website can create and delete accounts in order to create, edit and delete blog posts and post categories.

The application was made using **Node.js** and **Express.Js**. To handle the database (and structure it with migrations), the *model layer* was built using **Sequelize** (ORM tool), which facilitates future changes to the code or database.

As users can only change the data referring to their own blog, we used **JWT** (token validation) both for creating/deleting accounts and for creating/editing/deleting new blog posts and post categories.

## Main used technologies:
>Node.js
>
>Express.js
>
>JSON Web Token (JWT)
>
>Sequelize
>
>MySQL

## Instructions to utilize the application
After cloning the repository, install the necessary dependencies with the `npm install` command on your terminal and start the project with the `npm start` command. You can create the database with `npm run prestart` or drop it with `npm run drop`. To populate its tables, use `npm run seed`. After that, you can make requests to the API using an **HTTP client** (Insomnia, Postman, HTTPie, etc.).

<details>
  <summary>Endpoint for <i>Login</i></summary>
  <br>
  <ul>
  <li>post('/');</li>
  </ul>
</details>

<details>
  <summary>Endpoints for <i>Users</i></summary>
  <br>
  <ul>
  <li>post('/');</li>
  <li>get('/');</li>
  <li>get('/:id');</li>
  <li>delete('/me');</li>
  </ul>
</details>

<details>
  <summary>Endpoints for <i>Blog Posts</i></summary>
  <br>
  <ul>
  <li>post('/');</li>
  <li>get('/search');</li>
  <li>get('/');</li>
  <li>get('/:id');</li>
  <li>put('/:id');</li>
  <li>delete('/:id');</li>
  </ul>
</details>

<details>
  <summary>Endpoints for <i>Categories</i></summary>
  <br>
  <ul>
  <li>post('/');</li>
  <li>get('/');</li>
  </ul>
</details>

## Contact
You can get in touch with me at ismcondan2019@gmail.com or by <a href="https://www.linkedin.com/in/ismaeldantas/">Linkedin</a>.
