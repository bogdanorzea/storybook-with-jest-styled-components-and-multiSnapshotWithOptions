module.exports = {
  stories: ['../**/*.stories.@(tsx)', '../**/*.stories.mdx'],
  addons: [ 
    '@storybook/addon-essentials', 
    '@storybook/addon-links',
    '@storybook/addon-a11y', 
    '@storybook/addon-jest'
  ],
}