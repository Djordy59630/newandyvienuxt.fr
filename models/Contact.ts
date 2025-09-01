import { Dancer } from './Dancer';

export interface Contact {
  id?: number;
  firstName: string; // Corrigé de "fistname" à "firstName"
  lastName: string;
  phone: string;
  type: string;
  dancer?: Dancer;
}

export class ContactEntity implements Contact {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  type: string;
  dancer?: Dancer;

  constructor(data: Partial<Contact> = {}) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.phone = data.phone || '';
    this.type = data.type || '';
    this.dancer = data.dancer;
  }

  setDancer(dancer: Dancer | undefined): void {
    this.dancer = dancer;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}