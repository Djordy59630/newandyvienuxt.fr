import { Membership } from './Membership';
import { FamilyMember } from './FamilyMember';

export interface Activity {
  id?: number;
  name: string;
  memberships?: Membership[];
  familyMembers?: FamilyMember[];
}

export class ActivityEntity implements Activity {
  id?: number;
  name: string;
  memberships?: Membership[];
  familyMembers?: FamilyMember[];

  constructor(data: Partial<Activity> = {}) {
    this.id = data.id;
    this.name = data.name || '';
    this.memberships = data.memberships || [];
    this.familyMembers = data.familyMembers || [];
  }

  addMembership(membership: Membership): void {
    if (!this.memberships) {
      this.memberships = [];
    }
    if (!this.memberships.find(m => m.id === membership.id)) {
      this.memberships.push(membership);
      membership.addActivity(this);
    }
  }

  removeMembership(membership: Membership): void {
    if (this.memberships) {
      this.memberships = this.memberships.filter(m => m.id !== membership.id);
      membership.removeActivity(this);
    }
  }

  addFamilyMember(familyMember: FamilyMember): void {
    if (!this.familyMembers) {
      this.familyMembers = [];
    }
    if (!this.familyMembers.find(fm => fm.id === familyMember.id)) {
      this.familyMembers.push(familyMember);
      familyMember.addActivity(this);
    }
  }

  removeFamilyMember(familyMember: FamilyMember): void {
    if (this.familyMembers) {
      this.familyMembers = this.familyMembers.filter(fm => fm.id !== familyMember.id);
      familyMember.removeActivity(this);
    }
  }

  toString(): string {
    return this.name;
  }
}