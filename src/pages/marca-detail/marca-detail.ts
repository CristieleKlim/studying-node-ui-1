import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

//PROVIDERS
import { MarcaData } from '../../providers/marca-data';

// PAGES
import { MarcaForm } from '../marca-form/marca-form';
import { MarcaPage } from '../marca-page/marca-page';

@Component({
  selector: 'page-marca-detail',
  templateUrl: 'marca-detail.html'
})
export class MarcaDetail {

  selectedItem = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public marcaData: MarcaData) {

    // get nav param
    this.selectedItem = navParams.get('marca');

  }

  updateItem(event, item) {
    this.navCtrl.push(MarcaForm, {
      marca: item
    });
  }

  deleteItem(event, item) {
    this.marcaData.delete(this.selectedItem).subscribe( res => {
        this.navCtrl.push(MarcaPage);
      });
      
  }

}
