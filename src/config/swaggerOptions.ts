import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Resource Library API",
            version: "1.0.0",
            description:
            "API documentation for the Resource Library service managing educational resources."
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local Development Server"
            },
        ],
    },
    apis: ["./src/api/v1/routes/*.ts"]
};

export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};