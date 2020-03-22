import OurService from '../../components/OurService'

describe('<OurService />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <OurService />
    )

    expect(component).toMatchSnapshot()
  })
})