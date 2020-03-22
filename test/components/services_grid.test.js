import ServicesGrid from '../../components/ServicesGrid'

describe('<ServicesGrid />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ServicesGrid />
    )

    expect(component).toMatchSnapshot()
  })
})