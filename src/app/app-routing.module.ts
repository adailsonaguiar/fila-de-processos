import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePaginacaoPorDemandaExerciciosComponent } from './Modulos/moduloPaginacaoPorDemandaExercicios/home-paginacao-por-demanda-exercicios/home-paginacao-por-demanda-exercicios.component';
import { HomeProjectComponent } from './pages/home-project/home-project.component';
import { HomeFilaDeProcessamento } from './Modulos/filaDeProcessamento/HomeFilaDeProcessamento/home-fila-processamento.component';

const routes: Routes = [
  { path:"", component: HomeProjectComponent, pathMatch: 'full'},
  { path:"PaginacaoPorDemandaExercicios", component: HomePaginacaoPorDemandaExerciciosComponent},
  { path:"fila-de-processamento", component: HomeFilaDeProcessamento},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
