import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './components/carros/carros.component';
import { CombustiveisComponent } from './components/combustiveis/combustiveis.component';
import { PostosComponent } from './components/postos/postos.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path:"carros", component:CarrosComponent},
  {path:"combustiveis", component: CombustiveisComponent},
  {path:"postos", component:PostosComponent},
  {path:"list/:id", component:ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
