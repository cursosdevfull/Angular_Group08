import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() length!: number;
  @Input() currentPage: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = environment.PAGE_SIZE;
  arrayPages: number[] = [];
  // currentPage = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const quantityPages = Math.ceil(this.length / this.pageSize);
    this.arrayPages = Array(quantityPages)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit(): void {}

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value;
    console.log(this.currentPage);
    this.paginator.pageIndex = this.currentPage;
    this.onChangePage.emit(this.currentPage);
  }
}
