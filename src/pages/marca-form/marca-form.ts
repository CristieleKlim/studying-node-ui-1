import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Marca } from '../../models/marca';
import { MarcaData } from '../../providers/marca-data';

import { MarcaPage } from '../marca-page/marca-page';

@Component({
  selector: 'page-marca-form',
  templateUrl: 'marca-form.html'
})
export class MarcaForm {

  marca = {};
  title: string = "Adicionar Marca";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public marcaData: MarcaData) {

      let selectedItem = navParams.get('marca');

      if( selectedItem != undefined ){
        this.title = "Atualizar Marca";
        this.marca = selectedItem;
      }


    }

  
  save(){

    // DATA VALIDATION

    if ("_id" in this.marca) {
      this.marcaData.update(this.marca).subscribe(res => {
        this.navCtrl.push(MarcaPage, {});
      }, error => {
        console.log(error);
      });
    } else {
      this.marcaData.create(this.marca).subscribe(res => {
        this.navCtrl.push(MarcaPage, {});
      }, error => {
        console.log(error);
      });
    }


  }



}
