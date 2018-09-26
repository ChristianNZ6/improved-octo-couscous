import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://Loiane.com';
  cursoAngular = true;
  urlImagem = 'https://picsum.photos/200/300';


  valorAtual: string='';
  valorSalvo: string='';
  isMouseOver: boolean = false;
  valorInicial = 15;
  nomeDoCurso: string = 'Angular';

  nome: string = 'abc';
  pessoa: any = {
    nome:'def',
    idade:20



  }
  getValor(){

    return 1;
  }

  getCurtirCurso(){

    return true;
  }
  botaoClicado(){

    alert('botão clicado!');


  }

  onKeyUp(evento: KeyboardEvent){

this.valorAtual = (<HTMLInputElement> evento.target).value;

  }

  salvarValor(valor){

    this.valorSalvo = valor;


  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;


  }

  onMudouValor(evento){

console.log(evento);

  }
  constructor() { }

  ngOnInit() {
  }

}
