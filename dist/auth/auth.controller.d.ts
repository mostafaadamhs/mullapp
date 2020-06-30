import { AuthService } from './auth.service';
export declare class AuthController {
    private authServ;
    constructor(authServ: AuthService);
    check(body: any): Promise<any>;
    login(body: any): Promise<import("firebase-admin/lib/auth").admin.auth.UserRecord>;
}
