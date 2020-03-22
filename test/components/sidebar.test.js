import SideBar from '../../components/SideBar'

describe('<SideBar />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SideBar />
    )

    expect(component).toMatchSnapshot()
  })
})