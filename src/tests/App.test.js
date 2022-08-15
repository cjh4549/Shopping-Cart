import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';
import ProductContextProvider from '../context/ProductContextProvider';

//I want to check if searchcomponent is there with the search bar and options
// I want to check async api call is working
// I want to see if cart component renders correct view when items are added 

describe('Home Page render', () => {
  test("renders search form component", () => {
    render(<ProductContextProvider><SearchForm /></ProductContextProvider>);

    const searchFormElement = screen.getByText('search', {exact: false});
    expect(searchFormElement).toBeInTheDocument;

  });

  test('renders products when API call is successful', async() => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Product' }],
    });

    render(<ProductContextProvider><ProductList /></ProductContextProvider>)

    const productList = await screen.findAllByRole('productList');
    expect(productList).not.toHaveLength(0);
  })
});

