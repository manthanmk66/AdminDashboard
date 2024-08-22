import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import mongoose from "mongoose";

// Import your models
import Administrator from "./models/Administrator.js"; // Ensure these paths are correct
import Customer from "./models/Customer.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";
import User from "./models/User.js";

// Register Mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose);

// Create AdminJS instance with multiple resources
const adminJs = new AdminJS({
  resources: [
    { resource: User },
    { resource: Administrator },
    { resource: Customer },
    { resource: Category },
    { resource: Product },
    { resource: Order },
  ],
  rootPath: "/admin",
});

// Setup AdminJS with Express
const adminRouter = AdminJSExpress.buildRouter(adminJs);

export default adminRouter;
