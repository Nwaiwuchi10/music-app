import React from "react";

const Sitemap = () => {
  const pages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/musics", priority: "0.4", changefreq: "daily" },
    {
      path: "/mp3-download/:artist/:title",
      priority: "0.6",
      changefreq: "daily",
    },
    {
      path: "/mp4-download/:artist/:title",
      priority: "0.9",
      changefreq: "daily",
    },
    { path: "/videos", priority: "0.8", changefreq: "daily" },

    { path: "/contact-us", priority: "0.5", changefreq: "weekly" },
  ];

  const generateSitemapXML = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    pages.forEach((page) => {
      xml += `<url>\n`;
      xml += `<loc>https://todaysmuzik.com.ng/${page.path}</loc>\n`;
      xml += `<priority>${page.priority}</priority>\n`;
      xml += `<changefreq>${page.changefreq}</changefreq>\n`;
      xml += `</url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  };

  return <pre>{generateSitemapXML()}</pre>;
};

export default Sitemap;
