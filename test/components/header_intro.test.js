import HeaderIntro from '../../components/HeaderIntro'

describe('<HeaderIntro />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <HeaderIntro />
    )

    expect(component).toMatchSnapshot()
  })
})