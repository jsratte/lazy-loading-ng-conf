import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable()
export class SimpleAuthService implements AuthService {

    private _userName = "";

    public login(): void {
        this._userName = "Jean-Simon";
    }

    public logout(): void {
        this._userName = "";
    }

    public get isLoggedIn(): boolean {
        return this._userName != "";
    }

    public get userName(): string {
        return this._userName;
    }
}
