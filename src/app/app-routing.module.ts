import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './components/carros/carros.component';
import { CombustiveisComponent } from './components/combustiveis/combustiveis.component';

const routes: Routes = [
  {path:"carros", component:CarrosComponent},
  {path:"combustiveis", component: CombustiveisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
