import { Component, OnInit } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  nom = '';
  result = '';
  personne: Personne = {};

  constructor() {}

  ngOnInit(): void {}
  direBonjour() {
    // if (nom) this.result = 'Bonjour ' + nom + ' !';
    this.result = this.nom;
    console.log('Bonjour tous le monde !');
  }
}
