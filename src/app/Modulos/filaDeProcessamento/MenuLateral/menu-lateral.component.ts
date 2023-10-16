import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit, OnChanges {
  // @Input() public back: Number = new Number();
  @Output() public enviarProcessos: EventEmitter<any> = new EventEmitter();
  @Output() public executarProcessosEvent: EventEmitter<any> = new EventEmitter();

  public processo = 1;
  public nome = '';
  public tempoProcessador = 1;
  public entradaSaida = 1;

  ngOnInit(): void {}

  ngOnChanges(): void {}

  criarProcesso() {
    this.enviarProcessos.emit({
      nome: this.nome,
      tempoProcessador: this.tempoProcessador,
      entradaSaida: this.entradaSaida,
      estado: 0,
      id: new Date().valueOf(),
    });
  }

  executarProcessos() {
    this.executarProcessosEvent.emit();
  }

  constructor() {}
}
