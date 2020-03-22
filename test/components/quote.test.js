import Quote from '../../components/Quote'

describe('<Quote />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Quote />
    )

    expect(component).toMatchSnapshot()
  })
})