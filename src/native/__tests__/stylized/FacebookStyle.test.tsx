import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import FacebookStyle from '../../stylized/FacebookStyle'

describe('FacebookStyle', () => {
  const wrapper = renderer.create(
    <FacebookStyle id="FacebookStyle" animate={false} speed={20} />
  )

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
  })
})
