# Twingate Raycast Extension

Access Twingate Admin functionality from Raycast.

Currently supports the following commands, and only supports "read" functionality. There is currently no create/update/delete functionality supported.

- Connectors
- Groups
- Remote Networks
- Resources
- Service Accounts

- Access Requests (Beta WIP)

## Local Development

To run locally, first you must add a `.env` file with a `TWINGATE_TOKEN` set to a valid API key with minimum read-only permissions. This allows you to generate GraphQL from the Public API.

After that, simply `npm install` and then `npm run dev`.

If you want to generate graphql separately, run `npm run generate`

