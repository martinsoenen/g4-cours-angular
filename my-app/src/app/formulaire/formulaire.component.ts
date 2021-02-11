import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  result = "";

  constructor() { }

  ngOnInit(): void {
  }
  direBonjour(nom:string){
    this.result = nom;
    console.log('Bonjour le monde');
  }

}
