import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {

  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) { 
    this.count$ = store.select('counter');    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  
  reset() {
    this.store.dispatch(reset());
  }

}
