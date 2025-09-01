import { Activity } from './Activity';
import { Employee } from './Employee';

export interface Payment {
  id?: number;
  firstName: string;
  lastName: string;
  amount: string;
  paymentMethod: string;
  activity: Activity;
  employee: Employee;
  createdAt: Date;
  notes?: string;
}

export class PaymentEntity implements Payment {
  id?: number;
  firstName: string;
  lastName: string;
  amount: string;
  paymentMethod: string;
  activity: Activity;
  employee: Employee;
  createdAt: Date;
  notes?: string;

  constructor(data: Partial<Payment>) {
    this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.amount = data.amount || '0';
    this.paymentMethod = data.paymentMethod || '';
    this.activity = data.activity!;
    this.employee = data.employee!;
    this.createdAt = data.createdAt || new Date();
    this.notes = data.notes;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getMonthYear(): string {
    const date = new Date(this.createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }

  getFormattedAmount(): string {
    const numAmount = parseFloat(this.amount);
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(numAmount);
  }

  getAmountAsNumber(): number {
    return parseFloat(this.amount) || 0;
  }

  setAmount(amount: number): void {
    this.amount = amount.toFixed(2);
  }

  isValidPayment(): boolean {
    return (
      this.firstName.trim() !== '' &&
      this.lastName.trim() !== '' &&
      this.getAmountAsNumber() > 0 &&
      this.paymentMethod.trim() !== '' &&
      this.activity !== undefined &&
      this.employee !== undefined
    );
  }

  getPaymentMethodLabel(): string {
    switch (this.paymentMethod.toLowerCase()) {
      case 'cash':
      case 'especes':
        return 'Espèces';
      case 'card':
      case 'carte':
        return 'Carte bancaire';
      case 'check':
      case 'cheque':
        return 'Chèque';
      case 'transfer':
      case 'virement':
        return 'Virement';
      default:
        return this.paymentMethod;
    }
  }
}