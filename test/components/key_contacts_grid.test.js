import KeyContactsGrid from '../../components/KeyContactsGrid'

describe('<KeyContactsGrid />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <KeyContactsGrid />
    )

    expect(component).toMatchSnapshot()
  })
})