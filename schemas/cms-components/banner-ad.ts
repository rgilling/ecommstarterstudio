export const BannerAdSchema = {
  title: "Ad - Banner Ad",
  name: "landingPageBannerAd",
  type: "document",
  groups: [
    { name: "banner", title: "Banner" },
    { name: "cta", title: "Call to Action" },
    { name: "meta", title: "Metadata" },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "The name of the banner, used only in the management UI.",
      group: "meta"
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      description: "The image to be used in the banner",
      group: "banner"
    },
    {
      title: "Leading Line",
      name: "leadingLine",
      type: "string",
      description: "Can be used as the main headline in the banner. Also used for alt text",
      group: "banner"
    },
    {
      title: "Intro Text",
      name: "introText",
      type: "string",
      description: "Can be used as the main headline in the banner.",
      group: "banner"
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      group: "cta",
    },
    {
      title: "Link Type",
      name: "linkType",
      type: "string",
      options: {
        list: ["internal", "external"],
      },
      group: "cta",
    },
    {
      title: "Link Text",
      name: "linkText",
      type: "string",
      initialValue: "Shop Now",
      group: "cta",
    }
  ]
}