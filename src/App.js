import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './app.css';
import NewTodo from './components/novaTarefa';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
    const initialTarefas = [
        { id: uuidv4(), title: 'Estudar Javascript', checked: false },
        { id: uuidv4(), title: 'Estudar React', checked: false },
        { id: uuidv4(), title: 'Estudar Node', checked: false },
        { id: uuidv4(), title: 'Estudar Css', checked: true },
    ];

    const [tarefas, setTarefas] = useState(initialTarefas);

    const onNewTodo = (value) => {
        setTarefas([...tarefas, { id: uuidv4(), title: value, checked: true }]);
    };

    const onToggle = (tarefa) => {
        setTarefas(
            tarefas.map((obj) =>
                obj.id === tarefa.id ? { ...obj, checked: !obj.checked } : obj
            )
        );
    };

    const onRemove = (tarefa) => {
        setTarefas(tarefas.filter((obj) => obj.id !== tarefa.id));
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">Lista de Tarefas</h1>
            </header>
            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />
                <ListaTarefas
                    tarefas={tarefas}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </section>
        </section>
    );
};

export default App;
