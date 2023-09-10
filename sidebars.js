/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "doc",
      id: "port-overview",
    },
    {
      type: "doc",
      id: "quickstart",
    },
    {
      type: "doc",
      id: "usage-methods",
    },
    {
      type: "category",
      label: "🏗️ Build a software catalog",
      collapsed: true,
      link: {
        type: "doc",
        id: "build-your-software-catalog/build-your-software-catalog",
      },
      items: [
        {
          type: "category",
          label: "Define your data model",
          collapsed: true,
          link: {
            type: "doc",
            id: "build-your-software-catalog/define-your-data-model/define-your-data-model",
          },
          items: [
            {
              type: "doc",
              id: "build-your-software-catalog/define-your-data-model/setup-blueprint/setup-blueprint",
            },
            {
              type: "doc",
              id: "build-your-software-catalog/define-your-data-model/relate-blueprints/relate-blueprints",
            },
          ],
        },
        {
          type: "category",
          label: "Ingest data",
          collapsed: true,
          link: {
            type: "doc",
            id: "build-your-software-catalog/sync-data-to-catalog/sync-data-to-catalog",
          },
          items: [
            {
              type: "doc",
              id: "build-your-software-catalog/sync-data-to-catalog/api/api",
            },
            {
              type: "doc",
              id: "build-your-software-catalog/sync-data-to-catalog/ci-cd/ci-cd",
            },
            {
              type: "category",
              label: "Git",
              collapsible: false,
              className: "hidden",
              link: {
                type: "doc",
                id: "build-your-software-catalog/sync-data-to-catalog/git/git",
              },
              items: [
                "build-your-software-catalog/sync-data-to-catalog/git/bitbucket/bitbucket",
              ],
            },
            {
              type: "doc",
              id: "build-your-software-catalog/sync-data-to-catalog/api/api",
            },
            {
              type: "doc",
              id: "build-your-software-catalog/sync-data-to-catalog/api/api",
            },
            {
              type: "doc",
              id: "build-your-software-catalog/sync-data-to-catalog/api/api",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
