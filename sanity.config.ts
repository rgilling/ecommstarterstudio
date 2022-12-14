import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommdemo',

  projectId: 'w18rm447',
  dataset: 'ecommdemo',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
