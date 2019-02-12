import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import routers from '../router/routers';

const routes: Routes = routers;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
