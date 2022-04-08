import express from "express";
const route = express.Router();
route.get('/', (request, response) =>{
    response.send(`
    <h1>Home Page</h1>
    <p>Hello</p>
    `);
});
export default route;