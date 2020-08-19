import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  public completado: boolean;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public toggleAll(): void {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({ completarTodo: this.completado }));
  }

}
