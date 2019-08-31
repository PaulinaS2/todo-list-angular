import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData(key : string){
    return JSON.parse(localStorage.getItem(key)); // parse wyciaga obiekty ze string
  }

  setData(key: string, value : any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  constructor() { }
}
