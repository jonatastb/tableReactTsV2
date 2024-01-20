import { Routes, Route } from 'react-router-dom';
import { Table } from "./Table.tsx";
import { DefaultLayout } from './DefaultLayout.tsx';

export function Router() {
    
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Table/>}/>
            </Route>
        </Routes>
    )
}