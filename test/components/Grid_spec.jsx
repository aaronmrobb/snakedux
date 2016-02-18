import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Grid } from '../../src/components/Grid.jsx'

describe('<Grid/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Grid />)
    wrapper.setProps({
      grid: new Array(900).fill(''),
      snake: [0, 1],
      food: 1
    })
    expect(wrapper).to.be.ok
  })
  it('renders the correct amount of snake cells')
})