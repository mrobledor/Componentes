import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[]=Array(20);

  @ViewChild( IonInfiniteScroll) infinteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData (){
    //console.log(event);
    setTimeout(() =>{

      if (this.data.length >50){
        this.infinteScroll.complete();
        this.infinteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);
      //event.target.complete();
      this.infinteScroll.complete();
    },1500);
  }

}
