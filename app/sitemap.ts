import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.abacruit.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.abacruit.com/opportunities",
      lastModified: new Date(),
    },
    {
      url: "https://www.abacruit.com/refer",
      lastModified: new Date(),
    },
  ];
}
