import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location, DatePipe, } from '@angular/common';
import { MessageService } from 'primeng/api/public_api';
import { TokenStorageService } from '../../../../_services/token-storage.service';
import { PlanService } from '../../../../_services/plan.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReferenceService } from '../../../../_services/reference.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  refType: any;
  refConb: any;
  refAffaire: any;
  refPhase: any;
  refEmetteur: any;
  refLot: any;
  refNiveau: any;
  refZone: any;

  idChantier : any;
  editMode: boolean = false;
  submitted: boolean = false;
  userForm: FormGroup;
  files: File[] = [];
  idPlanInserted: number;
  addplan: any;
  file: File;
  src: string;
  myDate = new Date().toLocaleDateString();
  date: Date;
  finalDate: string;
  ////////////////////// test
  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];
  ////////////////////////////

  constructor(private router: Router, private fb: FormBuilder, private _location: Location, private tokenStorage: TokenStorageService, private _planservice: PlanService,
    private datePipe: DatePipe, private _reference: ReferenceService) {
    this.date = new Date();
    this.finalDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      bgcp_titre1: ['', Validators.required],
      bgcp_lib_indice: ['', Validators.required],
      bgc_nom_affaire: ['', Validators.required],
      spec_phase: ['', Validators.required],
      spec_emetteur: ['', Validators.required],
      spec_lot: ['', Validators.required],
      spec_niveau: ['', Validators.required],
      spec_zone: ['', Validators.required],
      spec_type: ['', Validators.required],
      spec_conb: ['', Validators.required],
      spec_numero: ['', Validators.required],
      bgcp_indice: ['', Validators.required],
      bgcp_date_indice_: ['', Validators.required],
      bgcp_statut: ['', Validators.required],
      bgcp_date_reel_emission: ['', Validators.required],
      file: ['', Validators.required]
    });
    // this.initForm();
    this.idChantier = this.tokenStorage.getChantier();
    if(this.idChantier.id){
      this._reference.loadAffaire(this.idChantier.id).subscribe(data => {
        this.refAffaire = data ;
       console.log(this.refAffaire);
      });

      this._reference.loadPhase(this.idChantier.id).subscribe(data => {
        this.refPhase = data ;
      //  console.log(this.refPhase);
      });

      this._reference.loadEmetteur(this.idChantier.id).subscribe(data => {
        this.refEmetteur = data ;
      //  console.log(this.refEmetteur);
      });

      this._reference.loadLot(this.idChantier.id).subscribe(data => {
        this.refLot = data ;
      //  console.log(this.refLot);
      });

      this._reference.loadNiveau(this.idChantier.id).subscribe(data => {
        this.refNiveau = data ;
      //  console.log(this.refNiveau);
      });

      this._reference.loadZone(this.idChantier.id).subscribe(data => {
        this.refZone = data ;
       // console.log(this.refZone);
      });

      this._reference.loadType(this.idChantier.id).subscribe(data => {
        this.refType = data ;
      //  console.log(this.refType);
      });

      this._reference.loadConb(this.idChantier.id).subscribe(data => {
        this.refConb = data ;
      //  console.log(this.refConb);
      });
    
    }
  }

  get lastName() {
    return this.userForm.get('file');
  }
  add() {
    console.log(this.userForm.value)
    
    this.addplan = this.userForm.value;
    this.addplan.existpdf = this.files.length > 0;
    this.addplan.r_creation_date = this.userForm.value.bgcp_date_indice_;
    this.addplan.r_modify_date = this.userForm.value.bgcp_date_indice_;
    this.addplan.bgcp_code_chantier = this.tokenStorage.getCodeChantier();
    this._planservice.addPlan(this.tokenStorage.getChantier().id, this.addplan).subscribe(data => {
      this.idPlanInserted = data.id;
      console.log(this.idPlanInserted);
      this.files.forEach(f => {
        this._planservice.addDocument(this.idPlanInserted, f).subscribe(data => {
          if (data) {
            Swal.fire({

              icon: 'success',
              title: 'Your Plan has been saved',
              showConfirmButton: false,
              timer: 3000
            })
            this.router.navigate(['/plans']);
            //   window.location.reload(); 
          }
        });

      })
    });




    // console.log(this.tokenStorage.getChantier().id)
    //  console.log(this.addplan);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file
      this.files.push(file);


    }
  }


  test() {
    console.log(this.files)
    // this._planservice.addDocuments(16,this.files).subscribe(()=>{});
    this.files.forEach(f => {
      this._planservice.addDocument(19, f).subscribe(() => { });
    })

  }

  initForm() {
    /* this.userForm.setValue({
 
   bgcp_date_indice_: this.myDate,
   bgcp_date_reel_emission: this.myDate
 }); */

  }

  backClicked() {
    this._location.back();
  }






}
