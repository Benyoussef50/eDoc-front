import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { SweetAlertService } from 'angular-sweetalert-service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  //docBases : [ 'LOSINGER', 'Magneta','MOA eDoc', 'EDOCYPRUS','BY BAT CSO', 'BY BAT GO' ,'BY BAT SE', 'Bouygues SA'];
  docBase = [
    {name: 'LOSINGER', code: 'LOSINGER'},
    {name: 'Magneta', code: 'Magneta'},
    {name: 'MOA eDoc', code: 'MOA eDoc'},
    {name: 'EDOCYPRUS', code: 'EDOCYPRUS'},
    {name: 'BY BAT CSO', code: 'BY BAT CSO'},
    {name: 'BY BAT GO', code: 'BY BAT GO'},
    {name: 'BY BAT SE', code: 'BY BAT SE'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Bouygues SA', code: 'Bouygues SA'}
];
  //[ 'LOSINGER', 'Magneta','MOA eDoc', 'EDOCYPRUS','BY BAT CSO', 'BY BAT GO' ,'BY BAT SE', 'Bouygues SA'];
  form: any = {}
  errorMessage =  '';
  roles: string[] = [];
  selectedDocBase: string;

   constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _alert: SweetAlertService
    ){
      
    }
   //
   
   ngOnInit(): void {
    if(this.tokenStorage.getToken()){
       this.roles = this.tokenStorage.getUser().roles;
   }
  }

  onSubmit(){
   // console.log(this.selectedDocBase);
    this.authService.login(this.form).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/projects']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.handleError(err);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  handleError(error: any) {
    let message = "Une erreur a eu lieu lors de l'authentification";

    switch (error.status) {
      case 401:
        // Unauthorized : When the login/password are not correct
        message = "Le login ou le mot de passe est incorrect";
        break;

      case 403:
        // Forbidden : when the user is disabled
        message = "Votre compte est désactivé";
        break;
    }

    console.log(message);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
          })
     
    
    
  }

 }
