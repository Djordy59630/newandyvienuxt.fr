import { User } from './User';
import { LeaveRequest } from './LeaveRequest';
import { RecoveryRequest } from './RecoveryRequest';

export interface Employee extends User {
  id?: number;
  email: string;
  roles: string[];
  password?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  zipcode: string;
  city: string;
  phone: string;
  hireDate: Date;
  position: string;
  hourlyRate: string;
  recoveryHours: string;
  paidLeaveBalance: string;
  unpaidLeaveBalance: string;
  createdAt: Date;
  updatedAt: Date;
  leaveRequests?: LeaveRequest[];
  recoveryRequests?: RecoveryRequest[];
  
  // Permissions granulaires
  canViewMemberships: boolean;
  canSearchMemberships: boolean;
  canViewDancers: boolean;
  canManageEmployees: boolean;
  canManageLeave: boolean;
  canViewDocuments: boolean;
  canViewLeaveRequests: boolean;
  canAccessPayments: boolean;

  getFullName(): string;
  hasPermission(permission: string): boolean;
  getActivePermissions(): string[];
}

export class EmployeeEntity implements Employee {
  id?: number;
  email: string;
  roles: string[];
  password?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  zipcode: string;
  city: string;
  phone: string;
  hireDate: Date;
  position: string;
  hourlyRate: string;
  recoveryHours: string;
  paidLeaveBalance: string;
  unpaidLeaveBalance: string;
  createdAt: Date;
  updatedAt: Date;
  leaveRequests?: LeaveRequest[];
  recoveryRequests?: RecoveryRequest[];
  
  canViewMemberships: boolean;
  canSearchMemberships: boolean;
  canViewDancers: boolean;
  canManageEmployees: boolean;
  canManageLeave: boolean;
  canViewDocuments: boolean;
  canViewLeaveRequests: boolean;
  canAccessPayments: boolean;

  constructor(data: Partial<Employee> = {}) {
    this.id = data.id;
    this.email = data.email || '';
    this.roles = data.roles || ['ROLE_EMPLOYEE'];
    this.password = data.password;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.dateOfBirth = data.dateOfBirth || new Date();
    this.address = data.address || '';
    this.zipcode = data.zipcode || '';
    this.city = data.city || '';
    this.phone = data.phone || '';
    this.hireDate = data.hireDate || new Date();
    this.position = data.position || '';
    this.hourlyRate = data.hourlyRate || '0';
    this.recoveryHours = data.recoveryHours || '0';
    this.paidLeaveBalance = data.paidLeaveBalance || '0';
    this.unpaidLeaveBalance = data.unpaidLeaveBalance || '0';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this.leaveRequests = data.leaveRequests || [];
    this.recoveryRequests = data.recoveryRequests || [];
    
    this.canViewMemberships = data.canViewMemberships || false;
    this.canSearchMemberships = data.canSearchMemberships || false;
    this.canViewDancers = data.canViewDancers || false;
    this.canManageEmployees = data.canManageEmployees || false;
    this.canManageLeave = data.canManageLeave || false;
    this.canViewDocuments = data.canViewDocuments || false;
    this.canViewLeaveRequests = data.canViewLeaveRequests || false;
    this.canAccessPayments = data.canAccessPayments || false;
  }

  getUserIdentifier(): string {
    return this.email;
  }

  getRoles(): string[] {
    const roles = [...this.roles];
    if (!roles.includes('ROLE_USER')) {
      roles.push('ROLE_USER');
    }
    return Array.from(new Set(roles));
  }

  setRoles(roles: string[]): Employee {
    this.roles = roles;
    return this;
  }

  eraseCredentials(): void {
    // Clear sensitive data if needed
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  hasPermission(permission: string): boolean {
    switch (permission) {
      case 'view_memberships':
        return this.canViewMemberships;
      case 'search_memberships':
        return this.canSearchMemberships;
      case 'view_dancers':
        return this.canViewDancers;
      case 'manage_employees':
        return this.canManageEmployees;
      case 'manage_leave':
        return this.canManageLeave;
      case 'view_documents':
        return this.canViewDocuments;
      case 'view_leave_requests':
        return this.canViewLeaveRequests;
      case 'access_payments':
        return this.canAccessPayments;
      default:
        return false;
    }
  }

  getActivePermissions(): string[] {
    const permissions: string[] = [];
    
    if (this.canViewMemberships) permissions.push('view_memberships');
    if (this.canSearchMemberships) permissions.push('search_memberships');
    if (this.canViewDancers) permissions.push('view_dancers');
    if (this.canManageEmployees) permissions.push('manage_employees');
    if (this.canManageLeave) permissions.push('manage_leave');
    if (this.canViewDocuments) permissions.push('view_documents');
    if (this.canViewLeaveRequests) permissions.push('view_leave_requests');
    if (this.canAccessPayments) permissions.push('access_payments');
    
    return permissions;
  }
}