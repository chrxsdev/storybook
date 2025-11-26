import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'UI/labels/My Label', // Creating groups
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], // Enable automatic documentation generation
  argTypes: {
    size: {
      control: 'inline-radio', // This change the format in which the componeent is displayed in the storybook
    },
    fontColor: {
      control: 'color', // Provides a color picker
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic story
export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
};

// More stories
export const AllCaps: Story = {
  args: {
    label: 'Story Label',
    size: 'normal',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#5517ac',
  },
};
