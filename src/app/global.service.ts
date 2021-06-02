import {Inject,  Injectable } from '@angular/core';
import {Router} from "@angular/router";
import Swal from 'sweetalert2'
// CommonJS
const swal =Swal

@Injectable()
export class GlobalService {
	token: any;
  userdata:any;
	api = "http://eltonbagne.info/hosting/";
	header = new Headers();
	option:any;
  constructor(private router: Router) { 	
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


  swalAlertError(error=null)
  {
   if(error==null)
     swal.fire('Connection Error2!', 'Database Server may be down. Please try again later.', 'error')
    //swal.fire('Connection Error!', 'Database Server may be down. Please try again later.<br><br>'+"Error reference: ("+error.status+") "+error.statusText+"<br>Target: "+error.url.replace(this.api,''), 'error');
   else
     swal.fire('Connection Error!', 'Database Server may be down. Please try again later.', 'error')
  }

  
  
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
