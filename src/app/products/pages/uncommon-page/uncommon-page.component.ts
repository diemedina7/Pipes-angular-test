import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: []
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Diego';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient(): void {
    this.name = 'Marianela';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Marianela', 'Diego', 'Jorge', 'Flor', 'Agustin', 'Marcos', 'Pedro'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Diego',
    age: 26,
    adress: 'Córdoba Argentina'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log("Tenemos data en la promesa");
    }, 3500);
  });

}
