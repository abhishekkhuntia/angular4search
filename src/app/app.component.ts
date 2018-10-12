import { Component, HostListener } from '@angular/core';
import { TodoMottoService } from './services/todo-motto.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterBy: string;
  usersData: any;
  showLoader: boolean;

  // PAGINATION
  currentPage: number;
  stopLoading: boolean;

  @HostListener("window:scroll", [])
    onScroll(): void {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if(!this.stopLoading && !this.showLoader){
          this.fetchDefaultUserList();
        }
      }
    }
  @HostListener("window:resize",[])
  onResize(): void{
    console.log("Window Resizing!!! .. Calculating the header height");
    let relElm = <HTMLElement>document.querySelector('.header');
    let tarElem = <HTMLElement>document.querySelector('.container');
    if(relElm && tarElem){
      tarElem.style.marginTop = relElm.offsetHeight + 'px';
    }
  }
  ngOnInit(){
    this.onResize();
  }
  constructor(private userService: TodoMottoService){
    this.usersData = [];
    this.filterBy = '';
    this.fetchDefaultUserList();
  }
  checkNReset(){
    this.usersData = [];
    this.currentPage = 0;
    this.stopLoading = false;
    this.fetchDefaultUserList();
  }
  fetchDefaultUserList(){
    this.currentPage = this.currentPage || 0;
    let params = {
      page: ++this.currentPage,
      limit: 10
    };
    if(this.filterBy && this.filterBy.length){
      params['search'] = this.filterBy;
    }
    this.showLoader = true;
    this.userService.getUserDataByParams(params)
      .subscribe(data => {
        console.log("Default data", data);
        this.usersData = this.usersData.concat(data);
        if(this.usersData && this.usersData.length && data && Object.keys(data).length ==0 ){
          this.stopLoading = true;
        }
        this.showLoader = false;

      },
      error => {
        console.log("Error in fetchDefaul >>", error);
      });
  }
  searchUsersByName(event){
    console.log("Search Users By Name >>", event);
  }
}
