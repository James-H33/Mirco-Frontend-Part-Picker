import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../models/app-state.model';
import { Part } from '../models/part.interface';
import { SystemPart } from '../models/system-part.interface';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public state = new AppState();
  public state$ = new BehaviorSubject<AppState>(new AppState());

  public updatePart(type: string, p: Part) {
    const part = this.state.parts.find(p => p.type === type);
    const updatedPart: any = { ...part, selection: p.name, price: p.price };

    let  updatedParts = this.state.parts.map(p => {
      if (updatedPart.id === p.id) {
        return updatedPart;
      }

      return p;
    });

    const newState = { ...this.state, parts: updatedParts };

    this.updateState(newState);
  }

  public removePart(part: SystemPart) {
    let updatedPart = { ...part, selection: '', price: 0 };
    let  updatedParts = this.state.parts.map(p => {
      if (updatedPart.id === p.id) {
        return updatedPart;
      }

      return p;
    });

    const newState = { ...this.state, parts: updatedParts };

    this.updateState(newState);
  }

  private updateState(state: AppState) {
    this.state = state;
    this.state$.next(this.state);
  }
}
