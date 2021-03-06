const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    autoprefixer({
      add: true,
      grid: true
    })
    // ,
    //Only add purgecss in production
    // process.env.NODE_ENV === "production"
    //   ? purgecss({
    //       content: ["./public/**/*.html", "./src/**/*.vue"],
    //       defaultExtractor: content => {
    //         const contentWithoutStyleBlocks = content.replace(
    //           /<style[^]+?<\/style>/gi,
    //           ""
    //         );
    //         return (
    //           contentWithoutStyleBlocks.match(
    //             /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
    //           ) || []
    //         );
    //       },
    //       whitelist: [
    //         "text-xl",
    //         "text-2xl",
    //         "text-3xl",
    //         "text-4xl",
    //         "er_list",
    //         "pl-4",
    //         "md:pl-4",
    //         "er_list",
    //         "er_list-md",
    //         "er_lead",
    //         "er_lead-md",
    //         "plain_list",
    //         "plain_list-md",
    //         "swiper-container",
    //         "section_slider",
    //         "swiper-container-initialized",
    //         "swiper-container-horizontal",
    //         "swiper-container-android",
    //         "swiper-slide",
    //         "swiper-wrapper",
    //         "slide",
    //         "v-select",
    //         "vs--searchable",
    //         "vs1__combobox",
    //         "vs__dropdown-toggle",
    //         "vs__selected-options",
    //         "vs__search",
    //         "vs__actions",
    //         "vs__clear",
    //         "vs__open-indicator",
    //         "vs__spinner",
    //         "v-select",
    //         "vs--single",
    //         "vs--searchable",
    //         "vs__dropdown-menu"
    //       ],
    //       whitelistChildren: ["v-select", "v-select", " vs--single", "vs--searchable", "section_text"],
    //       whitelistPatterns: [
    //         /$er-/,
    //         /-(leave|enter|appear)(|-(to|from|active))$/,
    //         /^(?!cursor-move).+-move$/,
    //         /^router-link(|-exact)-active$/
    //       ]
    //     })
    //   : ""
  ]
};
