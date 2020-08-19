import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, clearCompleted } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el Mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de ironman'),
  new Todo('Robar escudo del capitán américa'),
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map(d => {
      if (d.id === id) {
        return {
          ...d,
          completado: !d.completado
        };
      }
      return d;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(d => {
      if (d.id === id) {
        return {
          ...d,
          texto
        };
      }
      return d;
    });
  }),
  on(toggleAll, (state, { completarTodo }) => {
    return state.map(d => {
        return {
          ...d,
          completado: completarTodo
        };
    });
  }),
  on(clearCompleted, state => {
    return state.filter(d => !d.completado);
  }),
);

export function todoReducer(state, action): Todo[] {
  return _todoReducer(state, action);
}
