import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//MODEL
import { Marca } from '../../models/marca';

// PROVIDER
import { MarcaData } from '../../providers/marca-data';

// PAGES
import { MarcaForm } from '../marca-form/marca-form';
import { MarcaDetail } from '../marca-detail/marca-detail';

@Component({
  selector: 'page-marca-page',
  templateUrl: 'marca-page.html'
})
export class MarcaPage {

  items: Marca[];

  constructor(
    public navCtrl: NavController,
    public marcaData: MarcaData
  ) {

    // Populate marcas
    this.findAll();

  }

  getItems(ev: any) {

    // recupera o valor do evento
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  else {
      this.findAll();
    }

  }

  findAll(){
    this.marcaData.findAll().subscribe(marcas => {
        this.items = marcas;
      });
  }

  goToCreateMarca(){
    this.navCtrl.push(MarcaForm);
  }

  itemTapped(event, item) {
    
    this.navCtrl.push(MarcaDetail, {
      marca: item
    });
  }

}
