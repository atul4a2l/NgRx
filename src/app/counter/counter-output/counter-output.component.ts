import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  counter$: Observable<number> | undefined;
  counterSubscription!: Subscription;
  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void {
    // Method 1
    // this.counterSubscription = this.store.select(getCounter).subscribe(counter => {
    //   this.counter = counter;
    // })
    // Method 2
    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    // Method 1
    //this.counterSubscription.unsubscribe();
  }
}
