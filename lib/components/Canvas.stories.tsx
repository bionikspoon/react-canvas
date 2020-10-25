import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Canvas } from './Canvas'
import { Rect, RectProps } from './Rect'
import { RectExample1, RectExample2 } from './Rect.stories'

export default {
  title: 'Features/Canvas',
  component: Canvas,
  subcomponents: { Rect },
  argTypes: {},
} as Meta<TemplateProps>

interface TemplateProps {
  rect1: RectProps
  rect2: RectProps
}
const Template: Story<TemplateProps> = (props) => (
  <Canvas>
    <Rect {...props.rect1} />
    <Rect {...props.rect2} />
  </Canvas>
)

export const Example: { args: TemplateProps } = Template.bind({})
Example.args = {
  rect1: RectExample1.args,
  rect2: RectExample2.args,
}
