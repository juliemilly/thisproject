import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-findclient',
  templateUrl: './findclient.page.html',
  styleUrls: ['./findclient.page.scss'],
})
export class FindclientPage implements OnInit {

  @ViewChild("nome") nome; 

  lista : Cliente[] = [];

  constructor(private clienteServ : ClienteService,
    private navCtrl : NavController) { }
    
  ngOnInit() {
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.clienteServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }

}
