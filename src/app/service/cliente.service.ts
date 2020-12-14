import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';


@Injectable()
export class ClienteService {
    
    cliente: Cliente = new Cliente();

    constructor(private firestore: AngularFirestore) {

    }

    


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('cliente').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Cliente[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let cliente: Cliente = new Cliente();
                        cliente.setData(obj.data());// obj.payload.doc.data() -> Dados do cliente
                        cliente.id = obj.id; // inserindo ID
                        lista.push(cliente); // adicionando o cliente na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    buscaPorId(id : any){

        return from(new Observable(Observe =>{
    
            this.firestore.collection('cliente').doc(id).snapshotChanges().subscribe(response=>{
    
                let cliente : Cliente = new Cliente();
                cliente.id = response.payload.id;
                cliente.setData(response.payload.data());
                Observe.next(cliente);
                console.log(response);
            },(err) =>{
                
                Observe.error("Erro ao buscar o id");
    
    
            })
    
        }));
    
       }
}