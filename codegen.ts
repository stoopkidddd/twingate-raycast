import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  schema: [
    {
      "https://stoopkidhome.twingate.com/api/graphql": {
        // @ts-expect-error idk it doesnt like X-API-KEY
        headers: {
          "X-API-KEY": process.env.TWINGATE_TOKEN,
          // Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "User-Agent": "Raycast",
        },
      },
    },
  ],
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
    },
  },
  hooks: { afterAllFileWrite: ["ray lint --fix"] },
};

export default config;
