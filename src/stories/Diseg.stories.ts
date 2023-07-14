import type { Meta, StoryObj } from '@storybook/react';

import Diseg from '../';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Diseg',
  component: Diseg,
  tags: ['main']
} satisfies Meta<typeof Diseg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    url: '',
    onSave: () => {}
  },
};