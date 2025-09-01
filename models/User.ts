export interface User {
  id?: number;
  email: string;
  roles: string[];
  password?: string;
  dancer?: Dancer | null;

  getUserIdentifier(): string;
  getRoles(): string[];
  setRoles(roles: string[]): User;
  eraseCredentials(): void;
}

export class UserEntity implements User {
  id?: number;
  email: string;
  roles: string[];
  password?: string;
  dancer?: Dancer | null;

  constructor(data: Partial<User> = {}) {
    this.id = data.id;
    this.email = data.email || '';
    this.roles = data.roles || [];
    this.password = data.password;
    this.dancer = data.dancer;
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

  setRoles(roles: string[]): User {
    this.roles = roles;
    return this;
  }

  eraseCredentials(): void {
    // Clear sensitive data if needed
  }
}