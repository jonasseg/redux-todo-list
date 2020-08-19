import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';
// tslint:disable-next-line: variable-name
const _filtroReducer = createReducer(estadoInicial,
  on(setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state, action): filtrosValidos {
  return _filtroReducer(state, action);
}
