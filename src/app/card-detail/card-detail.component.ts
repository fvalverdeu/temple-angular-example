import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IHeroDetail } from '../interfaces/hero.interface';

@Component({
  selector: 'app-card-detail',
  // template: `
  //   <div class="container">
  //     <p>Hola</p>
  //   </div>
  // `,
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() show: boolean;
  @Input() detail: IHeroDetail;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  // ngOnChanges(obj: SimpleChanges): void {
  //   console.log(obj);
  // }

  ngOnInit(): void {
  }

  close(): void {
    // this.show = false;
    this.closed.emit(true);
  }

}
