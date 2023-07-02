import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ViacepProvider} from './viacep/viacep';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {

  private cep;
	private endereco:any = {};
	vazio = "";

  constructor(public navCtrl: NavController, private viacep: ViacepProvider) {}

	getEndereco(){
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}


}

