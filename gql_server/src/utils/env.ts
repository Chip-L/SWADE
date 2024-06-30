import dotenv from "dotenv";

// Load env file
dotenv.config({ path: "./.env" });

export const ensureEnv = (name: string): void => {
  if (!process.env[name]) {
    const eMsg = `Environment variable ${name} missing.\nEnsure that you have maintained this environment variable, either globally, or in a .env file in the project root.`;

    throw new Error(eMsg);
  }
};

export const getRequiredEnv = (name: string): string => {
  ensureEnv(name);
  return process.env[name] as string;
};

export const getEnv = (name: string): string => {
  return process.env[name] as string;
};
