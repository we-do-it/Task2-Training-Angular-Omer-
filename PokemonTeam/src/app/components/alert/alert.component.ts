import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getErrorMessage, getSuccessMessage } from 'src/app/state/pokemon/pokemon.selectors';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
successMessage?:string | null;
 errorMessage?:string | null;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(getSuccessMessage)).subscribe(
      message => this.successMessage = message
    )
    this.store.pipe(select(getErrorMessage)).subscribe(
      message => this.errorMessage = message
    )
  }

  

}
