export class AliceResponse {
    
    clientName: string;
    riskProfile: string;
    fundCount: number;

    constructor (clientName: string, riskProfile: string, fundCount: number) {
        this.clientName = clientName;
        this.riskProfile = riskProfile;
        this.fundCount = fundCount;
    }
}