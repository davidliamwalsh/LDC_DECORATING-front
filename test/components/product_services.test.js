import ProductServices from '../../components/ProductServices'

describe('<ProductServices />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ProductServices />
    )

    expect(component).toMatchSnapshot()
  })
})