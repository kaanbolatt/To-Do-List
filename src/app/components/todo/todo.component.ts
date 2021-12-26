import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() {
    //? this.model.items = this.getItemsFromLS(); // LOCALE STORAGE'DE TUTMAK İÇİN VAR
   }



  model = new Model();
  displayAll:boolean = false;
  itemStatus:boolean;

  addItem(value:any){
    if(value!=""){
      let data = {description: value, action: "Todo"};
      this.model.items.push(data)
      //? let items = this.getItemsFromLS(); //LOCALE STORAGE'DE TUTMAK İÇİN VAR
      //? items.push(data)//LOCALE STORAGE'DE TUTMAK İÇİN VAR
      //? localStorage.setItem("items", JSON.stringify(items)); //LOCALE STORAGE'DE TUTMAK İÇİN VAR
    } else{
      alert("You left the input field blank, please fill it out.")
    }
  }

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter( item => item.action != "Finished")
  }
  

  displayCount() {
    return this.model.items.filter(i=> i.action === "Finished").length
  }

  onEdit(i){
    //TODO: Buraya editleme fonksiyonlarını CRUD işlemlerinden UPDATE ile yapmanız gerekmekte, "i" dediğimiz zaten index idsini alacaktır.
  }

  onDelete(i){
    //TODO: Buraya editleme fonksiyonlarını CRUD işlemlerinden DELETE ile yapmanız gerekmekte, "i" dediğimiz zaten index idsini alacaktır.
  }

  //? getItemsFromLS(){ //LOCALE STORAGE'DE TUTMAK İÇİN VAR
  //?   let items: TodoItem[] = [];
  //?   let value = localStorage.getItem("items");
  //?   if(value != null){
  //?       items = JSON.parse(value);
  //?   }
  //?   return items;
  //? }

}
