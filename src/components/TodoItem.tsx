import Todo from "../models/todo";

const TodoItem: React.FC<{ key: string, text: string }> = (props) => {
    return <li key={props.key}>{props.text}</li>;
};

export default TodoItem;
