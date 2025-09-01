import { Membership } from './Membership';
import { Activity } from './Activity';

export interface FamilyMember {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  membership?: Membership;
  activity?: Activity[];
}

export class FamilyMemberEntity implements FamilyMember {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  membership?: Membership;
  activity?: Activity[];

  constructor(data: Partial<FamilyMember> = {}) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.dateOfBirth = data.dateOfBirth || new Date();
    this.membership = data.membership;
    this.activity = data.activity || [];
  }

  setMembership(membership: Membership | undefined): void {
    this.membership = membership;
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
}