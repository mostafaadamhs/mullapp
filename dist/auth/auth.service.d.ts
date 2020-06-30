export declare class AuthService {
    chechUsernamePassword(userName: any, password: any): Promise<any>;
    login(email: any, password: any): Promise<import("firebase-admin/lib/auth").admin.auth.UserRecord>;
}
