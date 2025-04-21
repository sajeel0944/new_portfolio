import { type SchemaTypeDefinition } from 'sanity'
import { Projects } from './projects'
import { Message } from './user_message'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Projects, Message],
}
