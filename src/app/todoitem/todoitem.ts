import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TodoItem {
  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }
}
