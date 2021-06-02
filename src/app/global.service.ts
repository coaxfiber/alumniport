import {Inject,  Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class GlobalService {
	token: any;
  userdata:any;
	api = "http://eltonbagne.info/hosting/";
	header = new Headers();
	option:any;
  constructor(private router: Router) { 	
  }

  requestToken(toks){
  	this.token = toks;
    this.header.append("Content-Type", "application/json");
  	this.header.append("Authorization","Bearer " + this.token);
  	this.option = new RequestOptions({ headers: this.header });
  }

  // swalAlert(title,text,type)
  // {
  // 	swal(
  //         title,
  //          text,
  //          type
  //         )
  // }

  // swalLoading(val){
  //    swal({
  //      title: val,allowOutsideClick: false,
  //     });
  //   swal.showLoading();
  // }
  // swalClose(){
  //   swal.close();
  // }


  // swalAlertError()
  // {
  //  swal('Oops...', 'Something went wrong!', 'error');
  // }

  
  
  // logout(){
  //   let timerInterval
  //   swal({
  //       allowOutsideClick: false,
  //       title: 'Auto close alert!',
  //       html: 'You will be Logged out from the system.',
  //       timer: 2000,
  //       onOpen: () => {
  //         swal.showLoading()
  //         timerInterval = setInterval(() => {
  //         }, 100)
  //       },
  //       onClose: () => {
  //         clearInterval(timerInterval)
  //       }
  //     }).then((result) => {
  //       if (
  //         // Read more about handling dismissals
  //         result.dismiss === swal.DismissReason.timer
  //       ) {
  //         this.storage.remove('token');
  //         window.location.reload();
  //       }
  //     })
  // }
}
