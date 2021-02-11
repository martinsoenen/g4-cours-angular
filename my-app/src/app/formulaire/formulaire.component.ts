import { Component, OnInit } from '@angular/core';
import { Personne} from "../interfaces/personne";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  result = "";
  personnes: Array<Personne> = [];
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {
  }

  direBonjour(){
    console.log('Bonjour le monde');
  }
  ajouterPersonnes(): void {
    this.personnes.push({ ... this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personnes);
  }

}
