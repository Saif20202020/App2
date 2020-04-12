import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AddItemPage implements OnInit {
  public  description: string;
  public  title: string;
  public  prix: string;
  constructor(public modal: ModalController) { }
  ngOnInit() {
  }
saveItem(){
  let newItem = {
    description: this.description,
    titre : this.title,
    prix: this.prix
  }
  this.modal.dismiss(newItem);
}
close(){
  this.modal.dismiss();
}

}
