import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFilaDeProcessamento } from './HomeFilaDeProcessamento/home-fila-processamento.component';
import { MenuLateralComponent } from './MenuLateral/menu-lateral.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [HomeFilaDeProcessamento, MenuLateralComponent],
  exports: [HomeFilaDeProcessamento],
})
export class FilaProcessamentoModule {}
