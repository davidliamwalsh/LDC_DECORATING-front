import NewsArticleFooter from '../../components/NewsArticleFooter'

describe('<NewsArticleFooter />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <NewsArticleFooter />
    )

    expect(component).toMatchSnapshot()
  })
})