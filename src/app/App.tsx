import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Ant,
    Custom,
    Chakra,
    Mui,
    Bootstrap,
    Home,
    Interview,
} from '@/pages';
import { ROUTES } from '@/entities';

import { Header } from './Header';
import styles from './App.module.css';

const App = () => (
    <BrowserRouter>
        <Header />
        <main className={styles.main}>
            <Routes>
                <Route path={ROUTES.ant} element={<Ant />} />
                <Route path={ROUTES.mui} element={<Mui />} />
                <Route path={ROUTES.chakra} element={<Chakra />} />
                <Route path={ROUTES.bootstrap} element={<Bootstrap />} />
                <Route path={ROUTES.custom} element={<Custom />} />
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.interview} element={<Interview />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;
