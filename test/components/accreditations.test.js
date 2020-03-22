import Accreditations from '../../components/Accreditations'

describe('<Accreditations />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Accreditations />
    )

    expect(component).toMatchSnapshot()
  })
})