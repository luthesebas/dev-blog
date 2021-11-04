import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "dev-blog",
  outDir: './docs',
  routes: {
    '/angular/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./articles/angular"
      }
    },
    '/javascript/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./articles/javascript"
      }
    },
  }
};
