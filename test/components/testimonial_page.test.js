import TestimonialPage from '../../components/TestimonialPage'

describe('<TestimonialPage />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <TestimonialPage />
    )

    expect(component).toMatchSnapshot()
  })
})