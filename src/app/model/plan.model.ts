import { Chantier } from './chantier.model';

export interface Plan {
    id: number,
    chantier: Chantier,
    bgcp_code_chantier: string,
    bgcp_statut: number,
    bgc_nom_affaire: string,
    spec_phase: string,
    spec_emetteur: string,
    spec_lot: number,
    spec_niveau: string,
    spec_zone:  string,
    spec_type: string,
    spec_conb:  string,
    spec_numero: number,
    bgcp_lib_indice: string,
    bgcp_indice:  string ,
    bgcp_titre1: string  ,
    r_creation_date:  Date ,
    bgcp_date_reel_emission: Date ,
    bgcp_date_indice_: Date  ,
    r_modify_date:  Date ,
    r_creator_name: string 
    exist_pdf: boolean
      }