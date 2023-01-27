export const StoreAddressSchema = {
  title: "Address",
  name: "address",
  type: "object",
  fields: [
    {
      title: "Street",
      name: "street",
      type: "string",
    },
    {
      title: "Street 2",
      name: "street2",
      type: "string",
    },
    {
      title: "City",
      name: "city",
      type: "string",
    },
    {
      title: "State",
      name: "state",
      type: "string",
    },
    {
      title: "Zip",
      name: "zip",
      type: "string",
    },
    {
      title: "Country",
      name: "country",
      type: "string",
    },
  ],
}

export const OpeningHours = {
  title: "Opening Hours",
  name: "openingHours",
  type: "object",
  fields: [
    {
      title: "Monday",
      name: "monday",
      type: "string",
    },
    {
      title: "Tuesday",
      name: "tuesday",
      type: "string",
    },
    {
      title: "Wednesday",
      name: "wednesday",
      type: "string",
    },
    {
      title: "Thursday",
      name: "thursday",
      type: "string",
    },
    {
      title: "Friday",
      name: "friday",
      type: "string",
    },
    {
      title: "Saturday",
      name: "saturday",
      type: "string",
    },
    {
      title: "Sunday",
      name: "sunday",
      type: "string",
    },
  ],

}

export const StoreLocationSchema = {
  title: "Location - Physical Store",
  name: "storeLocation",
  type: "document",
  groups: [
    { name: "meta", title: "Metadata" },
    { name: "overview", title: "Overview" },
    { name: "address", title: "Address" },
    { name: "openingHours", title: "Opening Hours" },
    { name: "services", title: "Services" },
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
      title: "Handle",
      name: "handle",
      type: "slug",
      options: {
        source: "name",
      },
      description: "The name of the banner, used only in the management UI.",
      group: "meta"
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      description: "You can include an image to support the store.",
      group: "meta"
    },
    {
      title: "Opening Hours",
      name: "openingHours",
      type: "openingHours",
      description: "Capture the opening hours of the store.",
      group: "openingHours"
    },
    {
      title: "Holiday Opening Hours",
      name: "holidayOpeningHours",
      type: "openingHours",
      description: "Capture the holiday opening hours of the store.",
      group: "openingHours"
    },
    {
      title: "Store Address",
      name: "address",
      type: "address",
      description: "Capture the store address.",
      group: "address"
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
      description: "Capture the store phone number.",
      group: "address"
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      description: "Capture the store email address.",
      group: "address"
    },
    {
      title: "Gepoint",
      name: "geopoint",
      type: "geopoint",
      description: "Capture the store location.",
      group: "address"
    },
  ]
}