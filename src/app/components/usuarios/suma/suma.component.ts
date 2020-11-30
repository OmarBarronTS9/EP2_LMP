import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  constructor() {  
  }

  ngOnInit(): void {
  }

  function(){
    var $ = (id: string) => document.getElementById(id);
     
    var totalButton: HTMLButtonElement = <HTMLButtonElement>$('Sumar');
    var valor1: HTMLInputElement = <HTMLInputElement>$('valor1');
    var valor2: HTMLInputElement = <HTMLInputElement>$('valor2');
    var resultado = $('Resultado');
     
    var ejecuta = function() {
        if(resultado?.innerHTML != null){
          let R = valor1.value + valor2.value;
          console.log(R);
        }
    }

    if(totalButton){
      totalButton.addEventListener('click', (e) => {
        ejecuta();
      })
    }

    if(valor1){
      valor1.addEventListener('change', (e) => {
        ejecuta();
      })
    }

    };
}