import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Canvas } from './Canvas'
import { Rect, RectProps } from './Rect'

export default {
  title: 'Features/Rect',
  component: Rect,

  decorators: [
    (Story) => (
      <Canvas>
        <Story />
      </Canvas>
    ),
  ],

  argTypes: {
    left: { control: 'number', min: 0, max: 300, step: 10 },
    top: { control: 'number', min: 0, max: 300, step: 10 },
    fill: { control: 'color' },

    angle: { control: 'range', min: -360, max: 360, step: 5 },
  },
} as Meta

interface TemplateProps extends RectProps {}

const Template: Story<TemplateProps> = (props) => <Rect {...props} />
export const RectExample1: { args: TemplateProps } = Template.bind({})
RectExample1.args = {
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 0,
}

export const RectExample2: { args: TemplateProps } = Template.bind({})
RectExample2.args = {
  left: 200,
  top: 250,
  fill: 'blue',
  width: 20,
  height: 20,
  angle: 45,
}
