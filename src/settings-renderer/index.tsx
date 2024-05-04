import { createRoot } from 'react-dom/client';
import Button from './components/button';

const App = () => <div>Settings window!</div>;

new Button().printConsole();

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
