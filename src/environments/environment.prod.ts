import { genericEnv } from "./genericEnv";

const env: Partial<typeof genericEnv> = { production: true };

export const environment = {
  ...genericEnv, ...env
};
