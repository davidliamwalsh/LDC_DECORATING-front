import SectorsGrid from '../../components/SectorsGrid'

describe('<SectorsGrid />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SectorsGrid />
    )

    expect(component).toMatchSnapshot()
  })
})