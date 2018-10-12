import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input() listData: any;
  @Input() filterBy: string;
  
  // DRAGGABLE REFERENCE
  dragStartIndex: number;


  constructor() { }

  ngOnInit() {
  }
  sorting($event, index){
    $event.preventDefault();
  }
  dropped($event, toIndex){
    var temp = this.listData[this.dragStartIndex];
    this.listData.splice(this.dragStartIndex, 1);
    this.listData.splice(toIndex, 0, temp);
  }
  dragend(ev){
    let ele = this.getListElement(ev.target);
    if(ele){
      ele.classList.remove('droppable');
    }
  }
  dragStart(ev, index){
    this.dragStartIndex = index;
    let ele = this.getListElement(ev.target);
    if(ele){
      ele.classList.add('droppable');
    }

  }
  getListElement(ele){
    if(ele && ele.tagName == 'LI' && ele.hasAttribute('draggable')){
      return ele;
    } else if(ele.parentElement){
      return this.getListElement(ele.parentElement);
    } else{
      return undefined;
    }
  }
}
