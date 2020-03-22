import Banner from '../../components/Banner'

describe('<Banner />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Banner />
    )

    expect(component).toMatchSnapshot()
  })
})