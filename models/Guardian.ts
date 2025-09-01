import { Dancer } from './Dancer';

export interface Guardian {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  zipcode: number;
  city: string;
  phone: string;
  mail: string;
  authorization: boolean; // Corrigé de "Authorisation" à "authorization"
  dancer?: Dancer | null;
}

export class GuardianEntity implements Guardian {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  zipcode: number;
  city: string;
  phone: string;
  mail: string;
  authorization: boolean;
  dancer?: Dancer | null;

  constructor(data: Partial<Guardian> = {}) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.address = data.address || '';
    this.zipcode = data.zipcode || 0;
    this.city = data.city || '';
    this.phone = data.phone || '';
    this.mail = data.mail || '';
    this.authorization = data.authorization || false;
    this.dancer = data.dancer;
  }

  setDancer(dancer: Dancer | null): void {
    if (dancer === null && this.dancer !== null) {
      if (this.dancer.guardian === this) {
        this.dancer.guardian = null;
      }
    }

    if (dancer !== null && dancer.guardian !== this) {
      dancer.guardian = this;
    }

    this.dancer = dancer;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}