import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';

export default function Home(){
    return(
        <main>
            <SearchForm />
            <ProductList />
        </main>
    )
}