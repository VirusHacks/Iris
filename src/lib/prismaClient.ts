import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Force fresh Prisma client instance to ensure new models are available
const createPrismaClient = () => {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is not set in environment variables!");
    throw new Error(
      "DATABASE_URL environment variable is required. Please set it in your .env file."
    );
  }

  // For Neon databases, ensure SSL is properly configured
  const databaseUrl = process.env.DATABASE_URL;
  
  // If it's a Neon connection string, ensure it has proper SSL parameters
  let connectionString = databaseUrl;
  if (databaseUrl.includes("neon.tech") && !databaseUrl.includes("sslmode")) {
    // Add SSL mode if not present (Neon requires SSL)
    const separator = databaseUrl.includes("?") ? "&" : "?";
    connectionString = `${databaseUrl}${separator}sslmode=require`;
    console.warn("⚠️  Added sslmode=require to Neon connection string");
  }

  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
};

// Check if existing client has the new models, if not recreate
let client = globalThis.prisma;
if (client && (!client.dashboardAnalytics || !client.forecastAnalytics)) {
  console.warn("⚠️  Prisma client missing new models. Recreating...");
  try {
    client.$disconnect().catch(() => {});
  } catch (e) {
    // Ignore errors
  }
  client = undefined;
  globalThis.prisma = undefined;
}

export const prismaClient = client || createPrismaClient();

// In development, store in global to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}
