const SitemapGenerator = require("react-sitemap-generator").default;
const path = require("path");

const publicUrl = "https://todaysmuzik.com.ng"; // Replace with your website URL

SitemapGenerator(
  publicUrl,
  [
    {
      path: "/",
      priority: 1.0,
      changefreq: "daily",
    },
    {
      path: "/videos",
      priority: 0.3,
      changefreq: "weekly",
    },
    {
      path: "/mp3-download/:artist/:title",
      priority: 0.4,
      changefreq: "weekly",
    },
    {
      path: "/musics",
      priority: 0.2,
      changefreq: "weekly",
    },
    {
      path: "/contact-us",
      priority: 0.5,
      changefreq: "monthly",
    },
  ],
  path.resolve("./public/sitemap.xml")
);
