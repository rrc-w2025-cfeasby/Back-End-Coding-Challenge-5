import cors, { CorsOptions } from "cors";

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(",") || [];

const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 600
};

export const corsConfig = cors(corsOptions);