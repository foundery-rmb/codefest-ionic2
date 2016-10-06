import { ClientFund } from './client-fund';
export interface Client {
    Client: string;
    Category: string;
    FSP_number: string;
    Reg_number: string;
    Risk_profile_client: string;
    Legal_persona_client: string;
    funds: ClientFund[];
}