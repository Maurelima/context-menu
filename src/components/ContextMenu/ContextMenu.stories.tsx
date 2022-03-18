import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContextMenu from './ContextMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/ContextMenu',
  component: ContextMenu,
} as ComponentMeta<typeof ContextMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContextMenu> = (args) => <ContextMenu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  showContextMenu: true,
    menuData: [
      {
        menuDescription: 'Teste',
        menuFunction: () => {},
      }
    ],
    anchorPoint: {
        xClickPosition: 0,
        yClickPosition: 0,
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
  showContextMenu: true,
    menuData: [
      {
        menuDescription: 'Teste 2',
        menuFunction: () => {},
      }
    ],
    anchorPoint: {
        xClickPosition: 0,
        yClickPosition: 0,
    }
};