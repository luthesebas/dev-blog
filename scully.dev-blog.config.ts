import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: '/dev-blog/' });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "dev-blog",
  outDir: './docs',
  defaultPostRenderers,
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
