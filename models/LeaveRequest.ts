import { Employee } from './Employee';
import { User } from './User';

export type LeaveRequestStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type LeaveRequestType = 'paid' | 'unpaid' | 'sick' | 'maternity' | 'paternity' | 'other';

export interface LeaveRequest {
  id?: number;
  employee: Employee;
  startDate: Date;
  endDate: Date;
  numberOfDays: string;
  type: LeaveRequestType;
  reason: string;
  status: LeaveRequestStatus;
  adminComment?: string;
  requestDate: Date;
  processedDate?: Date;
  processedBy?: User;
}

export class LeaveRequestEntity implements LeaveRequest {
  id?: number;
  employee: Employee;
  startDate: Date;
  endDate: Date;
  numberOfDays: string;
  type: LeaveRequestType;
  reason: string;
  status: LeaveRequestStatus;
  adminComment?: string;
  requestDate: Date;
  processedDate?: Date;
  processedBy?: User;

  constructor(data: Partial<LeaveRequest>) {
    this.id = data.id;
    this.employee = data.employee!;
    this.startDate = data.startDate || new Date();
    this.endDate = data.endDate || new Date();
    this.numberOfDays = data.numberOfDays || '0';
    this.type = data.type || 'paid';
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

  getTypeLabel(): string {
    switch (this.type) {
      case 'paid':
        return 'Congés payés';
      case 'unpaid':
        return 'Congés sans solde';
      case 'sick':
        return 'Congés maladie';
      case 'maternity':
        return 'Congés maternité';
      case 'paternity':
        return 'Congés paternité';
      case 'other':
        return 'Autre';
      default:
        return 'Inconnu';
    }
  }

  getDurationInDays(): number {
    return parseFloat(this.numberOfDays) || 0;
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

  getFormattedDateRange(): string {
    const startStr = this.startDate.toLocaleDateString('fr-FR');
    const endStr = this.endDate.toLocaleDateString('fr-FR');
    return `${startStr} - ${endStr}`;
  }
}