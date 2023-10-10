import { Component, OnInit } from '@angular/core';
import { Processo } from '../../../Classes/Processo';
import { FIFO } from '../../../Classes/FIFO';

@Component({
  selector: 'app-fila-processamento',
  templateUrl: './home-fila-processamento.html',
  styleUrls: ['./home-fila-processamento.css'],
})
export class HomeFilaDeProcessamento implements OnInit {
  public getDadosProcesso: Array<Processo> = [];
  public getDadosPaginas: FIFO = new FIFO();
  public getTipoExercicio: Number = new Number();
  public getTipoAlgoritmo: Number = new Number();
  public getRecursoTecnico: Number = new Number();
  public getRespostaMemoriaLogica: Array<Processo> = [];
  public getBack: Number = new Number();
  public qtdPaginas = 0;

  public processos: Array<{
    tempoProcessador: number;
    entradaSaida: number;
    estado: number;
    nome: string;
    cor: string;
    id: string;
  }> = [];

  ngOnInit(): void {
    // this.setEstadoApto(this.processos[0].id, 2);
    // console.log(this.processos.length)
  }

  public setDadosProcesso(event: any) {
    this.processos.unshift(event);
  }

  public setEstadoApto(idProcesso: string, tempo: number) {
    this.processos = this.processos.map((item) => {
      if (item.id === idProcesso) item.estado = 1;
      return item;
    });

    setInterval(() => {}, tempo * 1000);

    this.setEstadoExecucao(idProcesso, 10);
  }

  public setEstadoExecucao(idProcesso: string, tempo: number) {
    this.processos = this.processos.map((item) => {
      if (item.id === idProcesso) item.estado = 2;
      return item;
    });

    setInterval(() => {}, tempo * 1000);
  }
}
