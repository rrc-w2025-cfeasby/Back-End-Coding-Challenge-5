import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { helmetConfig } from './config/helmetConfig';
import { corsConfig } from './config/corsConfig';
import setupSwagger from "./config/swaggerConfig";
import resourceRoutes from "./api/v1/routes/resourceRoutes";
import { getHealth } from "./api/v1/controllers/resourceController";

const app: Express = express();

// Parse JSON 
app.use(express.json());

app.use(helmetConfig);
app.use(corsConfig);

app.get("/api/v1/health", getHealth);
app.use("/api/v1", resourceRoutes);

setupSwagger(app);

export default app;