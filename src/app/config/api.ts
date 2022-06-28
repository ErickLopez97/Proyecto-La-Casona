import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.lacasona.com' : 'http://localhost:3000'
export const productUrl = baseUrl + '/producto'
export const wishlistUrl = baseUrl + '/wishlist'
