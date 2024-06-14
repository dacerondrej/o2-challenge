import {
  Link,
  Outlet,
} from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import reactRouterLogo from '../../assets/react-router.png';
import reactQueryLogo from '../../assets/react-query.png';
import typescriptLogo from '../../assets/typescript.png';
import viteLogo from '../../assets/vite.svg';
import zodLogo from '../../assets/zod.png';
import './AppLayout.css';

export const AppLayout = () => (
  <>
    <header>
      <h1>O<sub>2</sub> Task</h1>
      <nav>
        <Link to="/">Users</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} alt="TypeScript logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </a>
      <a href="https://zod.dev/" target="_blank">
        <img src={zodLogo} alt="Zod logo" />
      </a>
      <a href="https://tanstack.com/query/latest" target="_blank">
        <img src={reactQueryLogo} alt="React-Query logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} alt="Vite logo" />
      </a>
      <a href="https://reactrouter.com/en/main" target="_blank">
        <img src={reactRouterLogo} alt="React Router logo" />
      </a>
    </footer>
  </>
);
