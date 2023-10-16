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

  ngOnInit(): void {}

  public setDadosProcesso(event: any) {
    this.processos.unshift(event);
  }

  start() {
    this.setEstadoApto(this.processos[0].id, 1);
  }

  public setEstadoApto(idProcesso: string, tempo: number) {
    this.processos = this.processos.map((item) => {
      if (item.id === idProcesso) item.estado = 1;
      return item;
    });

    setInterval(() => {
      this.setEstadoExecucao(idProcesso);
    }, tempo * 1000);
  }

  public setEstadoExecucao(idProcesso: string) {
    let tempoProcessador = 1;

    this.processos = this.processos.map((item) => {
      if (item.id === idProcesso) {
        item.estado = 2;

        tempoProcessador = item.tempoProcessador;
      }
      return item;
    });

    setInterval(() => {
      this.setEstadoDestruicao(idProcesso);
    }, tempoProcessador * 1000);
  }

  public setEstadoDestruicao(idProcesso: string) {
    this.processos = this.processos.map((item) => {
      if (item.id === idProcesso) {
        item.estado = 3;
      }
      return item;
    });

    setInterval(() => {
      this.processos = this.processos.filter((item) => item.id !== idProcesso);
    }, 3000);
  }
}
