import { Routes, Route } from 'react-router-dom';

export default function Main() {
    return (
        <main className="p-4">
            <Routes>
                <Route path="/" element={<h1>hello</h1>}/>
            </Routes>
        </main>
    )
}