import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemBuilderComponent } from './system-builder/system-builder.component';

const routes: Routes = [
  { path: '', component: SystemBuilderComponent, pathMatch: 'full' },
  {
    path: 'parts',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'PartPickerModule'
      }).then(m => m.PartPickerModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
