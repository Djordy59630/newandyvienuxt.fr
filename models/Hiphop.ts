import { Dancer } from './Dancer';

export interface Hiphop {
  id?: number;
  name: string[]; // Tableau de noms
  sportcode: string;
  dancers?: Dancer[];
}

export class HiphopEntity implements Hiphop {
  id?: number;
  name: string[];
  sportcode: string;
  dancers?: Dancer[];

  constructor(data: Partial<Hiphop> = {}) {
    this.id = data.id;
    this.name = data.name || [];
    this.sportcode = data.sportcode || '';
    this.dancers = data.dancers || [];
  }

  addDancer(dancer: Dancer): void {
    if (!this.dancers) {
      this.dancers = [];
    }
    if (!this.dancers.find(d => d.id === dancer.id)) {
      this.dancers.push(dancer);
      dancer.addHiphop(this);
    }
  }

  removeDancer(dancer: Dancer): void {
    if (this.dancers) {
      this.dancers = this.dancers.filter(d => d.id !== dancer.id);
      dancer.removeHiphop(this);
    }
  }

  addName(name: string): void {
    if (!this.name.includes(name)) {
      this.name.push(name);
    }
  }

  removeName(name: string): void {
    this.name = this.name.filter(n => n !== name);
  }

  getNameAsString(): string {
    return this.name.join(', ');
  }
}