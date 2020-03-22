import ContactMap from '../../components/ContactMap'

describe('<ContactMap />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ContactMap />
    )

    expect(component).toMatchSnapshot()
  })
})