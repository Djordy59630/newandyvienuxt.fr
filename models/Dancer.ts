import { User } from './User';
import { Guardian } from './Guardian';
import { Hiphop } from './Hiphop';
import { Contact } from './Contact';
import { License } from './License';

export interface Dancer {
  id?: number;
  firstName: string; // Note: corrigé de "fisrtname" à "firstName"
  lastName: string;
  level: string;
  phone: string;
  tshirt: string;
  address: string;
  zipcode: number;
  city: string;
  other: string;
  mail: string;
  guardian?: Guardian | null;
  hiphop?: Hiphop[];
  contact?: Contact[];
  license?: License[];
  birthday: Date;
  user?: User | null;

  getAge(): number;
}

export class DancerEntity implements Dancer {
  id?: number;
  firstName: string;
  lastName: string;
  level: string;
  phone: string;
  tshirt: string;
  address: string;
  zipcode: number;
  city: string;
  other: string;
  mail: string;
  guardian?: Guardian | null;
  hiphop?: Hiphop[];
  contact?: Contact[];
  license?: License[];
  birthday: Date;
  user?: User | null;

  constructor(data: Partial<Dancer> = {}) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.level = data.level || '';
    this.phone = data.phone || '';
    this.tshirt = data.tshirt || '';
    this.address = data.address || '';
    this.zipcode = data.zipcode || 0;
    this.city = data.city || '';
    this.other = data.other || '';
    this.mail = data.mail || '';
    this.guardian = data.guardian;
    this.hiphop = data.hiphop || [];
    this.contact = data.contact || [];
    this.license = data.license || [];
    this.birthday = data.birthday || new Date();
    this.user = data.user;
  }

  getAge(): number {
    if (!this.birthday) {
      return 0;
    }

    const today = new Date();
    const birthDate = new Date(this.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  addHiphop(hiphop: Hiphop): void {
    if (!this.hiphop) {
      this.hiphop = [];
    }
    if (!this.hiphop.find(h => h.id === hiphop.id)) {
      this.hiphop.push(hiphop);
    }
  }

  removeHiphop(hiphop: Hiphop): void {
    if (this.hiphop) {
      this.hiphop = this.hiphop.filter(h => h.id !== hiphop.id);
    }
  }

  addContact(contact: Contact): void {
    if (!this.contact) {
      this.contact = [];
    }
    if (!this.contact.find(c => c.id === contact.id)) {
      this.contact.push(contact);
      contact.dancer = this;
    }
  }

  removeContact(contact: Contact): void {
    if (this.contact) {
      this.contact = this.contact.filter(c => c.id !== contact.id);
      if (contact.dancer === this) {
        contact.dancer = undefined;
      }
    }
  }

  addLicense(license: License): void {
    if (!this.license) {
      this.license = [];
    }
    if (!this.license.find(l => l.id === license.id)) {
      this.license.push(license);
      license.dancer = this;
    }
  }

  removeLicense(license: License): void {
    if (this.license) {
      this.license = this.license.filter(l => l.id !== license.id);
      if (license.dancer === this) {
        license.dancer = undefined;
      }
    }
  }
}