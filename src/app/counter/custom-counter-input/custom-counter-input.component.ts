import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeName, customDecrement, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit{
  value!: number;
  name!: string;
  name$!: Observable<string>;

  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void {
    // this.store.select(getName).subscribe(name => {
    //   this.name = name;
    // });
    this.name$ = this.store.select(getName);
  }

  onAdd() {
    if(+this.value > 0)
      this.store.dispatch(customIncrement({value: +this.value}))
  }

  onSubtract() {
    if(+this.value > 0)
      this.store.dispatch(customDecrement({decrement: +this.value}))
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
