export interface JwtResponse {
    success: boolean;
    message: string;
    email: string;
    token: string;
    expiresIn: string;
}
