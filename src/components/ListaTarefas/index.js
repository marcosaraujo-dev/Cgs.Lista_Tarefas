import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import './styles.css';

const ListaTarefas = ({ tarefas, onToggle, onRemove }) => {
    return (
        <ul className="todo-list">
            {tarefas.map((tarefa) => (
                <li key={tarefa.id.toString()} className="item">
                    <span
                        className={[
                            'todo',
                            tarefa.checked ? 'checked' : '',
                        ].join(' ')}
                        role="button"
                        onClick={() => onToggle && onToggle(tarefa)}
                    >
                        {tarefa.title}
                    </span>
                    <button
                        type="button"
                        className="btn remove"
                        onClick={() => onRemove && onRemove(tarefa)}
                    >
                        <MdDelete size={28} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

ListaTarefas.prototype = {
    tarefas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    ontoggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ListaTarefas;
