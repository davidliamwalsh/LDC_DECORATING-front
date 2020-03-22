import NewsArticleMain from '../../components/NewsArticleMain'

describe('<NewsArticleMain />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <NewsArticleMain />
    )

    expect(component).toMatchSnapshot()
  })
})