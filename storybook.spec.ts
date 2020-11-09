import initStoryshots,  { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
    framework: 'react',
    integrityOptions: { cwd: __dirname },

    // Uncomment next line to see that jest-styled-components effect is lost
    // test: multiSnapshotWithOptions(),
});