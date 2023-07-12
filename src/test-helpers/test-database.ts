import { createConnection, Connection } from "typeorm"
import path from "path"
import loadConfig from "@medusajs/medusa/dist/loaders/config"

let connection: Connection

export const testDatabase = {
  setup: async (): Promise<void> => {
    const rootDirectory = process.cwd()
    const configModule = loadConfig(rootDirectory)
    const entitiesPath = path.join(__dirname, "..", "models", "**", "*.*")
    const migrationsPath = path.join(__dirname, "..", "migrations", "**", "*.*")
    const databaseUrl = 'postgres://postgres:Presence123@localhost:5432/pricepally-new'

    connection = await createConnection({
      type: 'postgres',
      url: databaseUrl,
      entities: [
        "node_modules/@medusajs/medusa/dist/models/*.js",
        entitiesPath
      ],
      migrations: [migrationsPath],
      synchronize: false,
      dropSchema: false,
    })
  },

  destroy: async (): Promise<void> => {
    if (connection) {
      await connection.close()
    }
  },

  getConnection: (): Connection => {
    return connection
  },
}