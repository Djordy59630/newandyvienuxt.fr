import { Activity } from './Activity';
import { FamilyMember } from './FamilyMember';
import { Period } from './Period';

export interface Membership {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  zipcode: number;
  city: string;
  dateOfBirth: Date;
  mail: string;
  mainPhone: string;
  secondPhone?: string;
  cafNumber?: string;
  job: string;
  photoPermission: boolean;
  rgpdPermission: boolean;
  smsPermission: boolean;
  communicationPermission: boolean;
  regulationsPermission: boolean;
  type: string;
  activity?: Activity[];
  familyMember?: FamilyMember[];
  periods?: Period[];
}

export class MembershipEntity implements Membership {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  zipcode: number;
  city: string;
  dateOfBirth: Date;
  mail: string;
  mainPhone: string;
  secondPhone?: string;
  cafNumber?: string;
  job: string;
  photoPermission: boolean;
  rgpdPermission: boolean;
  smsPermission: boolean;
  communicationPermission: boolean;
  regulationsPermission: boolean;
  type: string;
  activity?: Activity[];
  familyMember?: FamilyMember[];
  periods?: Period[];

  constructor(data: Partial<Membership> = {}) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.address = data.address || '';
    this.zipcode = data.zipcode || 0;
    this.city = data.city || '';
    this.dateOfBirth = data.dateOfBirth || new Date();
    this.mail = data.mail || '';
    this.mainPhone = data.mainPhone || '';
    this.secondPhone = data.secondPhone;
    this.cafNumber = data.cafNumber;
    this.job = data.job || '';
    this.photoPermission = data.photoPermission || false;
    this.rgpdPermission = data.rgpdPermission || false;
    this.smsPermission = data.smsPermission || false;
    this.communicationPermission = data.communicationPermission || false;
    this.regulationsPermission = data.regulationsPermission || false;
    this.type = data.type || '';
    this.activity = data.activity || [];
    this.familyMember = data.familyMember || [];
    this.periods = data.periods || [];
  }

  addActivity(activity: Activity): void {
    if (!this.activity) {
      this.activity = [];
    }
    if (!this.activity.find(a => a.id === activity.id)) {
      this.activity.push(activity);
    }
  }

  removeActivity(activity: Activity): void {
    if (this.activity) {
      this.activity = this.activity.filter(a => a.id !== activity.id);
    }
  }

  addFamilyMember(familyMember: FamilyMember): void {
    if (!this.familyMember) {
      this.familyMember = [];
    }
    if (!this.familyMember.find(fm => fm.id === familyMember.id)) {
      this.familyMember.push(familyMember);
      familyMember.membership = this;
    }
  }

  removeFamilyMember(familyMember: FamilyMember): void {
    if (this.familyMember) {
      this.familyMember = this.familyMember.filter(fm => fm.id !== familyMember.id);
      if (familyMember.membership === this) {
        familyMember.membership = undefined;
      }
    }
  }

  addPeriod(period: Period): void {
    if (!this.periods) {
      this.periods = [];
    }
    if (!this.periods.find(p => p.id === period.id)) {
      this.periods.push(period);
      period.membership = this;
    }
  }

  removePeriod(period: Period): void {
    if (this.periods) {
      this.periods = this.periods.filter(p => p.id !== period.id);
      if (period.membership === this) {
        period.membership = undefined;
      }
    }
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    if (!this.dateOfBirth) {
      return 0;
    }

    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  hasValidPermissions(): boolean {
    return this.rgpdPermission && this.regulationsPermission;
  }
}