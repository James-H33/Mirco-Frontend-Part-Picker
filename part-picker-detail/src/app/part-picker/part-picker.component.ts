import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppStateService, Part, PartService } from 'picker-lib';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-part-picker',
  templateUrl: './part-picker.component.html',
  styleUrls: ['./part-picker.component.scss']
})
export class PartPickerComponent implements OnInit {
  public id: string = '';
  public parts: Part[] = [];
  public loaders: any[] = Array(3).fill(0);

  constructor(
    private router: ActivatedRoute,
    private appState: AppStateService,
    private partService: PartService,
    private nav: Router
  ) { }

  public ngOnInit() {
    this.router.paramMap
      .pipe(
        map((map: ParamMap) => map.get('id')),
        tap((id: any) => this.id = id || ''),
        switchMap((id: string) => this.partService.getParts(id))
      ).subscribe((parts: Part[]) => {
        this.parts = parts;
      });
  }

  public updatePart(p: Part) {
    this.appState.updatePart(this.id, p);
    this.nav.navigate(['']);
  }
}
