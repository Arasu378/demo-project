import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  public setConsoleLog(value: string | object): void {
    console.log(value);
  }
  public setConsoleError(value: string | object): void {
    console.error(value);
  }
  public clearConsole(): void{
    console.clear();
  }
}
