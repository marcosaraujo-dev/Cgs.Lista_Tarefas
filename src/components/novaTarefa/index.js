import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [valueText, setValueText] = useState('');

    const erase = () => {
        setValueText('');
    };

    const novoTexto = (event) => {
        setValueText(event.target.value);
    };

    const novaTarefa = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };
    const submit = () => {
        if (onNewTodo) {
            onNewTodo(valueText);
            erase();
        }
    };

    return (
        <input
            name="newTodo"
            id="newTodo"
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={valueText}
            onChange={novoTexto}
            onKeyDown={novaTarefa}
        />
    );
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
