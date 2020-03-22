import OperationalStaff from '../../components/OperationalStaff'

describe('<OperationalStaff />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <OperationalStaff />
    )

    expect(component).toMatchSnapshot()
  })
})