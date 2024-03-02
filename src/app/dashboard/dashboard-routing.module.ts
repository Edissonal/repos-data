import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboastlayoutComponent } from './layouts/dasboastlayout/dasboastlayout.component';

const routes: Routes = [
  {path:'',
   component:DasboastlayoutComponent,
  // children:[] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
