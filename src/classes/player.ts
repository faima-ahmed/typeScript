import { IsPlayer } from "../interfaces/IsPlayer";

//module-system
export class player implements IsPlayer{
    constructor(
      public name: string,
      public age: number,
      readonly country: string,
    ) {}
  
    play() {
      console.log(`${this.name} from ${this.country} is playing!`);
    }
  }