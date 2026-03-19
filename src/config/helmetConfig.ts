import helmet from "helmet";
import { HelmetOptions } from "helmet";

const helmetOptions: HelmetOptions = {
    contentSecurityPolicy: false,
    hsts: process.env.NODE_ENV === "production" ? undefined : false,
    frameguard: { action: "deny" },
    hidePoweredBy: true,
};

export const helmetConfig = helmet(helmetOptions);