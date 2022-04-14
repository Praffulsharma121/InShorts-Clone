export class User {
    constructor(
        public displayName: string,
        public email: string,
        public localId: string,
        private idToken: string,
        private expiresIn: Date
    ){}

    get token() {
        if(!this.expiresIn || new Date() > this.expiresIn){
            return null;
        }
        return this.idToken;
    }
}