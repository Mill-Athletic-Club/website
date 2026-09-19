import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero subtext",
      type: "text",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "hoursWeekday",
      title: "Weekday hours",
      type: "string",
    }),
    defineField({
      name: "hoursWeekend",
      title: "Weekend hours",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
  ],
});
