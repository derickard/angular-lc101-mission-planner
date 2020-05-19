import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {name: 'Habitat dome', amount: 1},
    {name: 'Drones', amount: 10},
    {name: 'Food containers', amount: 50},
    {name: 'Oxygen tanks', amount: 10}];
  
  itemExists: boolean = false;
  itemInvalid: boolean = false;
  itemBeingEdited: object = null;
  amountBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  editItem(item: object) {
    this.itemBeingEdited = item;
  }

  editAmount(item: object) {
    this.amountBeingEdited = item;
  }

  saveItem(newItem: string, item: object) {
   if(this.isValidItem(newItem, item['amount'])) {
      item['name'] = newItem;
      this.itemBeingEdited = null;
    }
  }

  saveAmount(newAmount: number, item: object) {
       item['amount'] = newAmount;
       this.amountBeingEdited = null;
   }

   cancelSave(item) {
     this.itemBeingEdited = null;
     this.amountBeingEdited = null;
   }

  isValidItem(newItem: string, amount:number) {
    if( (this.equipment.findIndex( item => item['name'].toLowerCase() === newItem.toLowerCase())) > 0) {
      this.itemExists = true;
    } else if (!newItem || !amount ) {
      this.itemInvalid = true;
    }
    return !(this.itemExists || this.itemInvalid);

  }

  add(item: string, amount: number) {
    if(this.isValidItem(item, amount)) {
      this.equipment.push({name: item, amount: amount});
    }
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index,1);
  }

}
