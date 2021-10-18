import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://contatos-nodb.herokuapp.com';
  constructor(private http: HttpClient) {}

  cadastrar(nome: string, email: string, senha: string) {
    let u = { nome, email, senha };
    return this.http.post(this.url + '/registrar', u);
  }
}
