import { Membership } from './Membership';

export interface Period {
  id?: number;
  createdAt: Date;
  endAt: Date;
  membership?: Membership;
}

export class PeriodEntity implements Period {
  id?: number;
  createdAt: Date;
  endAt: Date;
  membership?: Membership;

  constructor(data: Partial<Period> = {}) {
    this.id = data.id;
    this.createdAt = data.createdAt || new Date();
    this.endAt = data.endAt || new Date();
    this.membership = data.membership;
  }

  setMembership(membership: Membership | undefined): void {
    this.membership = membership;
  }

  isActive(): boolean {
    const now = new Date();
    return this.createdAt <= now && now <= this.endAt;
  }

  isExpired(): boolean {
    return this.endAt < new Date();
  }

  getDuration(): number {
    const timeDiff = this.endAt.getTime() - this.createdAt.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Durée en jours
  }

  getDaysUntilExpiration(): number {
    const now = new Date();
    if (this.isExpired()) {
      return 0;
    }
    const timeDiff = this.endAt.getTime() - now.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  getRemainingTime(): string {
    const daysLeft = this.getDaysUntilExpiration();
    if (daysLeft === 0) {
      return 'Expiré';
    } else if (daysLeft === 1) {
      return '1 jour restant';
    } else {
      return `${daysLeft} jours restants`;
    }
  }
}