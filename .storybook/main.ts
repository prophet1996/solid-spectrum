import type { StorybookConfig } from 'storybook-solidjs-vite'
const config: StorybookConfig = {
  stories:['../packages/@solid-aria/toggle/stories/*.stories.{js,jsx,ts,tsx}'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
