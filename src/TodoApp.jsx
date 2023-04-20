import React from 'react'
import { useGetTodosQuery } from './store/api/todosApi'

export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();
    console.log(todos);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'Flase' } </h4>

            <pre>...</pre>

            <ul>
                {
                    todos.map( todo => (
                        <li key={todo.id} >
                           <strong>{ todo.completed ? 'Completada ->' : 'Pendiente ->' }</strong> { todo.title }
                        </li>
                    ) )
                }
            </ul>

            <button>
                Next TODO
            </button>
        </>
    )
}
