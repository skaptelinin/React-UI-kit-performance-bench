import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Ant, Custom, Chakra, Mui, Bootstrap, Home } from '../pages';
import styles from './App.module.css';

enum ROUTES {
    ant = 'ant',
    mui = 'mui',
    chakra = 'chakra',
    bootstrap = 'bootstrap',
    custom = 'custom',
    home = '/',
}

const App = () => (
    <BrowserRouter>
        <header className={styles.header}>
            <Link to={ROUTES.ant}>
                Ant
            </Link>
            <Link to={ROUTES.mui}>
                MUI
            </Link>
            <Link to={ROUTES.chakra}>
                Chakra UI
            </Link>
            <Link to={ROUTES.bootstrap}>
                Bootstrap
            </Link>
            <Link to={ROUTES.custom}>
                Custom UI-kit
            </Link>
            <Link to={ROUTES.home}>
                Back
            </Link>
        </header>
        <main className={styles.main}>
            <Routes>
                <Route path={ROUTES.ant} element={<Ant />} />
                <Route path={ROUTES.mui} element={<Mui />} />
                <Route path={ROUTES.chakra} element={<Chakra />} />
                <Route path={ROUTES.bootstrap} element={<Bootstrap />} />
                <Route path={ROUTES.custom} element={<Custom />} />
                <Route path={ROUTES.home} element={<Home />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;
