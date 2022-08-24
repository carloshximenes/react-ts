import Todos from "./components/Todos";
import Todo from "./models/todo";

const DUMMY_TODO: Todo[] = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
];

function App() {
    return (
        <div>
            <Todos items={DUMMY_TODO} />
        </div>
    );
}

export default App;
