import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  listafilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRzR4fti2tdQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    }
  ];

}
