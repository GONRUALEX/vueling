import { genericEnv } from "./genericEnv";

const env: Partial<typeof genericEnv> = { production: false };

export const environment = {
  ...genericEnv, ...env
};

