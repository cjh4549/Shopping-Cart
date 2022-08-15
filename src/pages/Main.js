import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';

export default function Main(){
    return(
        <main className="px-10 mt-5">
            <SearchForm />
            <ProductList />
        </main>
    )
}