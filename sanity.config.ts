import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import visionTool from '@sanity/vision'
import { visionTool } from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity-nextjs-portfolio',
  basePath: "/studio",
  projectId: 'h57kz60b',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
