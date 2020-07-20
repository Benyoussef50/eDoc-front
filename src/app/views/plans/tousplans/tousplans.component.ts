import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { ReferenceService } from '../../../_services/reference.service';
import { DataService } from '../../../_services/data.service';
import { PlanService } from '../../../_services/plan.service';
import { Plan } from '../../../model/plan.model';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-tousplans',
  templateUrl: './tousplans.component.html',
  styleUrls: ['./tousplans.component.css']
})
export class TousplansComponent implements OnInit {
  // @ViewChild('pdfViewer') pdfViewer: ElementRef;

  displayBasic: boolean;
  @ViewChild(Table) table: Table;
  cols: any[];
  colFiles: any[];
  colDiff: any[];
  colTaches: any[];
  colBord: any[];
  Diffusions: any;
  Taches: any;
  Bordereaux: any;
  docs: any[];
  finalPlans: any[];
  tousPlans: any[] = [];
  selectedPlan: any;
  ContextPlan: any;
  codeChantier: string;
  displayMaximizable: boolean;
  titrePlan: string;
  pdfSrc: string;
  result: any;
  index: number = -1;
  userForm: FormGroup;
  files: any;
  loading: boolean;
  menuItems: MenuItem[];
  updatePlan: any;
  myDate: any;
  idChantier: any;
  items: MenuItem[];
  radioModel: string = 'All';
  dte:any;

  refType: any;
  refConb: any;
  refAffaire: any;
  refPhase: any;
  refEmetteur: any;
  refLot: any;
  refNiveau: any;
  refZone: any;

  constructor(private _planservice: PlanService, private activatedroute: ActivatedRoute,
    private tokenStorage: TokenStorageService, private datePipe: DatePipe, private router: Router,
    private dataservice: DataService, private fb: FormBuilder,
    private _reference: ReferenceService) {
    // let latest_date =this.datePipe.transform(this.myDate, 'yyyy/MM/dd');
    this.myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.dte = new Date();
    this.dte.setDate(this.dte.getDate() - 7);
    console.log(this.dte.toString());
  }


  ngOnInit(): void {
    //   Init Form Subgrid 
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

    });
    this.colFiles = [
      { field: 'setFile', header: 'Name' },
      { field: 'fullFormat', header: `Format` }
    ]

    this.colDiff = [
      { field: 'appro', header: 'Appro' },
      { field: 'avis', header: 'Avis' },
      { field: 'davis', header: 'Date Avis' },
      { field: 'dret', header: 'Date ret prev.' },
      { field: 'observation', header: 'Observarion Avis' },

    ]

    this.colTaches = [
      { field: 'nom', header: 'Nom' },
      { field: 'prenom', header: 'Prenom' },
      { field: 'societe', header: 'Société' },
      { field: 'ddelegation', header: 'Date de délégation' },
      { field: 'dfin', header: 'Date de fin' },
      { field: 'objet', header: 'Objet' }
    ]

    this.colBord = [
      { field: 'Cv', header: 'Circuit de validation' },
      { field: 'nb', header: 'numéro bordereau' },
      { field: 'emisle', header: 'Emis le' },
      { field: 'delai', header: 'Délai (j)' },
      { field: 'recule', header: 'Reçu le' },
      { field: 'signataire', header: 'Signataire' },
      { field: 'ba', header: 'Bordereau annulé' }
    ]
    //                          Init Table  
    this.cols = [
      { field: 'bgcp_statut', header: 'Statut' },
      { field: 'bgc_nom_affaire', header: `Nom d'affaire` },
      { field: 'spec_phase', header: 'Phase' },
      { field: 'spec_emetteur', header: 'Emetteur' },
      { field: 'spec_lot', header: 'Lot' },
      { field: 'spec_niveau', header: 'Niveau' },
      { field: 'spec_zone', header: 'Zone' },
      { field: 'spec_type', header: 'Type' },
      { field: 'spec_conb', header: 'Co/NB' },
      { field: 'spec_numero', header: 'Numero' },
      { field: 'bgcp_indice', header: 'Indice' },
      { field: 'bgcp_titre1', header: 'Titre' },
      { field: 'bgcp_lib_indice', header: 'Libelleé ind.' },
      //  { field: 'r_creation_date', header: 'Date ind.' },
      { field: 'bgcp_date_reel_emission', header: 'Reçu le' },
      //   { field: 'r_modify_date', header: 'Modifié le' },
      { field: 'bgcp_date_indice_', header: 'eDocké le' },
      //   { field: 'r_creator_name', header: 'Modifié par' },

    ];

    this.idChantier = this.tokenStorage.getChantier();
    if (this.idChantier.id) {
      this._reference.loadAffaire(this.idChantier.id).subscribe(data => {
        this.refAffaire = data;
      });

      this._reference.loadPhase(this.idChantier.id).subscribe(data => {
        this.refPhase = data;
      });

      this._reference.loadEmetteur(this.idChantier.id).subscribe(data => {
        this.refEmetteur = data;
      });

      this._reference.loadLot(this.idChantier.id).subscribe(data => {
        this.refLot = data;
      });

      this._reference.loadNiveau(this.idChantier.id).subscribe(data => {
        this.refNiveau = data;
      });

      this._reference.loadZone(this.idChantier.id).subscribe(data => {
        this.refZone = data;
      });

      this._reference.loadType(this.idChantier.id).subscribe(data => {
        this.refType = data;
      });

      this._reference.loadConb(this.idChantier.id).subscribe(data => {
        this.refConb = data;
      });



    }

    //                Chantier Data 
    this.codeChantier = this.tokenStorage.getCodeChantier();
    //                       Plans Data  
    if (this.codeChantier) {
      this.loadPlans(this.codeChantier);
    }
    //                 Loading table 
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    //                menu Items 
    this.menuItems = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];


    this.items = [
      { label: 'Ouvrir', icon: 'pi pi-file-o', command: (event) => this.showMaximizableDialog(this.ContextPlan) },
      { label: 'Ajouter au panier', icon: 'pi pi-shopping-cart', command: (event) => console.log('wow') },
      { label: 'Nouveau', icon: 'pi pi-plus', command: (event) => this.router.navigate(['/plans/add']) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deletePlan(this.ContextPlan) },
      { label: 'Copier URL', icon: 'pi pi-paperclip', command: (event) => console.log('wow') }
    ];
  }


  showMaximizableDialog(plan: any) {
    this.codification(plan)
    console.log(plan);
    if (plan.content[0].setFile) {
    //  this.pdfSrc = "assets/documents/" + plan.content[0].setFile;
    this.pdfSrc = "http://localhost:8080/api/docs/show/ElGamal.pdf/";
      console.log(this.pdfSrc);
      this.index = 0;
    }
  }

  codification(plan: Plan) {
    this.titrePlan = "Plan " + plan.spec_phase + "_" + plan.spec_emetteur + "_" + plan.spec_lot + "_" + plan.spec_type + "_" + plan.spec_zone + "_" + plan.spec_niveau + "_" + plan.spec_numero + "_" + plan.bgcp_indice;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }


  loadPlans(code: string) {
    this._planservice.loadPlans(code).subscribe(data => {
      this.finalPlans = data;
      this.tousPlans = this.finalPlans;
    });
  }

  loadDocuments(code: string) {
    this._planservice.documentUrl(code).subscribe(data => {
      this.docs = data
    });
  }

  onRowSelect(event) {
    this.initForm();
    if (this.selectedPlan) {
      this.files = this.selectedPlan.content;
    }
  }
  //                                  Subgrid Form 
  initForm() {
    if (this.selectedPlan) {
      this.userForm.setValue({
        bgcp_titre1: this.selectedPlan.bgcp_titre1,
        bgcp_lib_indice: this.selectedPlan.bgcp_lib_indice,
        bgc_nom_affaire: this.selectedPlan.bgc_nom_affaire,
        spec_phase: this.selectedPlan.spec_phase,
        spec_emetteur: this.selectedPlan.spec_emetteur,
        spec_lot: this.selectedPlan.spec_lot,
        spec_niveau: this.selectedPlan.spec_niveau,
        spec_zone: this.selectedPlan.spec_zone,
        spec_type: this.selectedPlan.spec_type,
        spec_conb: this.selectedPlan.spec_conb,
        spec_numero: this.selectedPlan.spec_numero,
        bgcp_indice: this.selectedPlan.bgcp_indice,
        bgcp_date_indice_: this.selectedPlan.bgcp_date_indice_,
        bgcp_statut: this.selectedPlan.bgcp_statut,
        bgcp_date_reel_emission: this.selectedPlan.bgcp_date_reel_emission,
      });
    }
  }
  onTabClose() {
    this.pdfSrc = null;
  }



  Download(content: any) {
    console.log(content);
    this._planservice.downloadDocument(content.setFile);
  }

  deletePlan(plan: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce plan?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.value) {
        this._planservice.deletePlan(plan.id).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Your plan has been deleted.',
            'success'
          );
          let index = this.tousPlans.indexOf(plan);
          this.tousPlans = this.tousPlans.filter((val, i) => i != index);
        });

      }
    })

  }
  enregistrer() {
    this.updatePlan = this.userForm.value;
    this.updatePlan.id = this.selectedPlan.id;
    this.updatePlan.existpdf = false;
    this.updatePlan.r_creation_date = this.userForm.value.bgcp_date_indice_;
    this.updatePlan.r_modify_date = this.userForm.value.bgcp_date_indice_;
    this.updatePlan.bgcp_code_chantier = this.tokenStorage.getCodeChantier();
    this._planservice.updatePlan(this.selectedPlan.id, this.updatePlan).subscribe(data => {
      let i = this.tousPlans.indexOf(this.selectedPlan);
      this.tousPlans[i] = data;
      console.log(this.tousPlans);
      this.selectedPlan = null;
    });
  }
  getPlans() {
    let cars = [];
    for (let car of this.tousPlans) {
      cars.push(car);
    }
    return cars;
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.getPlans());
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "primengTable");
    });
  }

  test() {
    console.log(this.selectedPlan)
    console.log('Current date :', this.myDate)
  }

  _dataChanged() {
    switch (this.radioModel) {
      case "Semaine": {
        console.log(this.myDate);
        this.tousPlans = this.finalPlans.filter(x => new Date(x.bgcp_date_indice_) > this.dte);
        break;
      }
      case "Jour": {
        this.tousPlans = this.finalPlans.filter(x => x.bgcp_date_indice_ === this.myDate);
        break;
      }
      default: {
        this.tousPlans = this.finalPlans;
        break;
      }
    }
  }

}

@Component({
  selector: 'app-message',
  template: `
  <p>Home works!</p>
    `
})
export class MessageComponent {
}