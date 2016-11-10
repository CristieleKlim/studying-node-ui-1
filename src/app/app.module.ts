import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';

//IMPORT PAGES HERE
import { MarcaPage } from '../pages/marca-page/marca-page';
import { MarcaForm } from '../pages/marca-form/marca-form';
import { MarcaDetail } from '../pages/marca-detail/marca-detail';

//IMPORT PROVIDERS HERE
import { MarcaData } from '../providers/marca-data';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  //ADD PAGES HERE
  declarations: [
    MyApp,
    MarcaPage,
    MarcaForm,
    MarcaDetail,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //ADD PAGES HERE
  entryComponents: [
    MyApp,
    MarcaPage,
    MarcaForm,
    MarcaDetail,
    Page1,
    Page2
  ],
  //ADD PROVIDERS HERE
  providers: [MarcaData]
})
export class AppModule {}
