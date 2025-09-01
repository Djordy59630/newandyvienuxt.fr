import { Employee } from './Employee';
import { User } from './User';

export type RecoveryRequestStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface RecoveryRequest {
  id?: number;
  employee: Employee;
  date: Date;
  hours: string;
  reason: string;
  status: RecoveryRequestStatus;
  adminComment?: string;
  requestDate: Date;
  processedDate?: Date;
  processedBy?: User;
}

export class RecoveryRequestEntity implements RecoveryRequest {
  id?: number;
  employee: Employee;
  date: Date;
  hours: string;
  reason: string;
  status: RecoveryRequestStatus;
  adminComment?: string;
  requestDate: Date;
  processedDate?: Date;
  processedBy?: User;

  constructor(data: Partial<RecoveryRequest>) {
    this.id = data.id;
    this.employee = data.employee!;
    this.date = data.date || new Date();
    this.hours = data.hours || '0';
    this.reason = data.reason || '';
    this.status = data.status || 'pending';
    this.adminComment = data.adminComment;
    this.requestDate = data.requestDate || new Date();
    this.processedDate = data.processedDate;
    this.processedBy = data.processedBy;
  }

  getStatusLabel(): string {
    switch (this.status) {
      case 'pending':
        return 'En attente';
      case 'approved':
        return 'Approuvé';
      case 'rejected':
        return 'Refusé';
      case 'cancelled':
        return 'Annulé';
      default:
        return 'Inconnu';
    }
  }

  getStatusBadgeClass(): string {
    switch (this.status) {
      case 'pending':
        return 'warning';
      case 'approved':
        return 'success';
      case 'rejected':
        return 'danger';
      case 'cancelled':
        return 'secondary';
      default:
        return 'info';
    }
  }

  getHoursAsNumber(): number {
    return parseFloat(this.hours) || 0;
  }

  setHours(hours: number): void {
    this.hours = hours.toFixed(2);
  }

  isPending(): boolean {
    return this.status === 'pending';
  }

  isApproved(): boolean {
    return this.status === 'approved';
  }

  isRejected(): boolean {
    return this.status === 'rejected';
  }

  isCancelled(): boolean {
    return this.status === 'cancelled';
  }

  canBeModified(): boolean {
    return this.status === 'pending';
  }

  canBeCancelled(): boolean {
    return this.status === 'pending' || this.status === 'approved';
  }

  approve(processedBy: User, comment?: string): void {
    this.status = 'approved';
    this.processedBy = processedBy;
    this.processedDate = new Date();
    if (comment) {
      this.adminComment = comment;
    }
  }

  reject(processedBy: User, comment: string): void {
    this.status = 'rejected';
    this.processedBy = processedBy;
    this.processedDate = new Date();
    this.adminComment = comment;
  }

  cancel(): void {
    this.status = 'cancelled';
    this.processedDate = new Date();
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString('fr-FR');
  }

  getFormattedHours(): string {
    const numHours = this.getHoursAsNumber();
    return `${numHours}h`;
  }

  isValidRequest(): boolean {
    return (
      this.employee !== undefined &&
      this.date !== undefined &&
      this.getHoursAsNumber() > 0 &&
      this.reason.trim() !== ''
    );
  }
}