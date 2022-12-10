/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.pexels.com",
      "links.papareact.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoienVsYXh5IiwiYSI6ImNsM3g4YTJnaTA1N2Yzam41NTc2dmI5eWgifQ.1wQY40oo5Mb6N0vLa1_JsQ",
  },
  reactStrictMode: true,
};
