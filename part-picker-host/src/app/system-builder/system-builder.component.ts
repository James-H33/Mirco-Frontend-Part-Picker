import { Component, OnInit } from '@angular/core';
import { AppState, AppStateService, SystemPart } from 'picker-lib';
import { BehaviorSubject } from 'rxjs';
import { MakeGuid } from '../utils/utils';

// const ELEMENT_DATA: SystemPart[] = [
//   { id: MakeGuid(), type: 'gpu', name: 'CPU', selection: 'Ryzen 5800X', price: 300 },
//   { id: MakeGuid(), type: 'cpu', name: 'GPU', selection: 'RX 6800 XT', price: 500 },
//   // { id: makeGuid(), type: 'Mother Board', name: 'MotherBoard', selection: 'Asus Gaming XL', price: 200 },
//   { id: MakeGuid(), type: 'motherboard', name: 'Mother Board', selection: '', price: 0 },
// ];

@Component({
  selector: 'app-system-builder',
  templateUrl: './system-builder.component.html',
  styleUrls: ['./system-builder.component.scss']
})
export class SystemBuilderComponent implements OnInit {
  public displayedColumns: string[] = ['type', 'selection', 'price', 'remove' ];
  public dataSource: SystemPart[] = [];
  public total = 0;

  constructor(
    private state: AppStateService
  ) { }

  public ngOnInit() {
    this.state.state$.subscribe((state: AppState) => {
      this.dataSource = state.parts;
    });


    this.total = this.dataSource.reduce((sum, part: SystemPart) => {
      sum += part.price;

      return sum;
    }, 0);
  }

  public removePart(p: SystemPart) {
    this.state.removePart(p);
  }

}
