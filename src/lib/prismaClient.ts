import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Force fresh Prisma client instance to ensure new models are available
const createPrismaClient = () => {
  return new PrismaClient({
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
