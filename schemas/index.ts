import { BannerAdSchema } from "./cms-components/banner-ad";
import { StoreLocationSchema, StoreAddressSchema, OpeningHours } from "./locations/store";


export const schemaTypes = [
  BannerAdSchema,
  StoreAddressSchema,
  OpeningHours,
  StoreLocationSchema,
  {
    title: "Help Page",
    name: "helpPage",
    type: "document",
    groups: [
      { name: "body", title: "Body" },
      { name: "media", title: "Media" },
      { name: "meta", title: "Metadata" },
    ],
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
        description: "The name of the page, used only in the management UI.",
        group: "meta"
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        description: "Used to retrieve the page based on the URL slug.",
        options: {
          source: "name",
        },
        group: "meta"
      },
      {
        title: "Image",
        name: "image",
        type: "image",
        description: "You can include an image to support the article.",
        group: "media"
      },
      {
        title: "Heading",
        name: "heading",
        type: "string",
        description: "The page title.",
        group: "body"
      },
      {
        name: 'bodyText',
        type: 'array',
        title: 'Body Text',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      }
    ]
  }
]
