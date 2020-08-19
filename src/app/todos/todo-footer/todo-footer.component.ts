import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos, setFiltro } from '../filtro/filtro.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public filtroActual: filtrosValidos = 'todos';
  public filtros: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  public pendientes: number = 0;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  public cambiarFiltro(filtro: filtrosValidos): void {
    this.store.dispatch(setFiltro({ filtro }));
  }

  public limpiarCompletados(): void {
    this.store.dispatch(clearCompleted());
  }
}
