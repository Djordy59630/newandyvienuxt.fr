import { Dancer } from './Dancer';

export interface License {
  id?: number;
  createdAt: Date;
  endDate: Date;
  dancer?: Dancer;
}

export class LicenseEntity implements License {
  id?: number;
  createdAt: Date;
  endDate: Date;
  dancer?: Dancer;

  constructor(data: Partial<License> = {}) {
    this.id = data.id;
    this.createdAt = data.createdAt || new Date();
    this.endDate = data.endDate || new Date();
    this.dancer = data.dancer;
  }

  setDancer(dancer: Dancer | undefined): void {
    this.dancer = dancer;
  }

  isExpired(): boolean {
    return this.endDate < new Date();
  }

  getDaysUntilExpiration(): number {
    const now = new Date();
    const timeDiff = this.endDate.getTime() - now.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  isActive(): boolean {
    const now = new Date();
    return this.createdAt <= now && now <= this.endDate;
  }
}