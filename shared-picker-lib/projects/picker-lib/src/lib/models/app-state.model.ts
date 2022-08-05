import { MakeGuid } from "../utils";
import { SystemPart } from "./system-part.interface";

export class AppState {
  public parts: SystemPart[] = [];

  constructor() {
    this.parts = [
      { id: MakeGuid(), type: 'cpu', name: 'CPU', selection: '', price: 0 },
      { id: MakeGuid(), type: 'gpu', name: 'GPU', selection: '', price: 0 },
      { id: MakeGuid(), type: 'motherboard', name: 'Mother Board', selection: '', price: 0 },
    ]
  }
}
