import { Component, OnInit } from '@angular/core';
import { deliverables } from './deliverables';
import { GroupDescriptor, process, State  } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult,  DataStateChangeEvent,SelectionEvent } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.css'],
  styles:[`
       .k-grid tr.even { background-color: #f45c42; }
       .k-grid tr.odd { background-color: #41f4df; }
       .k-icon {background-color: #10c4b2;}
   `]
})
export class DeliverablesComponent implements OnInit {

  private selected:boolean=false;
  private state: State = {
    skip: 0,
    take: 5
  };

  public nav:any;
  private groups: GroupDescriptor[] = [{ field: "Project.Name" }];

  private gridView: Object = [];

  private loadDeliverables1(): void {
    this.gridView = process(deliverables, { group: this.groups });
  }
  private loadDeliverables2(): void {
    this.gridView = process(deliverables, this.state);
  }

  constructor() {
    this.nav = document.querySelector('nav.navbar');
  }

  ngOnInit() {
    this.nav.className += " white-bg";
    this.loadDeliverables1();
  }
  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadDeliverables1();
  }
  protected dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.loadDeliverables2();
  }

  public selectionChange(selection: SelectionEvent): void{
    console.log("change");
    this.selected=true;
    // var el: HTMLElement = document.getElementById('costingBtn');
    // el.setAttribute("disabled","false");
  }

}
