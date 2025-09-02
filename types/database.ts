// Types de base pour les modèles Prisma
export interface User {
  id: number
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  roles: string
}

export interface Dancer {
  id: number
  userId: number
  email: string
  firstName: string
  lastName: string
  birthDate: Date
  postalCode: string
  city: string
  address: string
  phone: string
  schoolLevel: 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2' | '6EME' | '5EME' | '4EME' | '3EME' | '2NDE' | '1ERE' | 'TERMINALE' | 'BAC_1' | 'BAC_2' | 'BAC_3' | 'BAC_4' | 'BAC_5'
  tShirtSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  otherInfo?: string | null
  createdAt: Date
  updatedAt: Date
  level?: string | null
  medicalInfo?: string | null
}

export interface DanceGroup {
  id: number
  name: string
  description: string
  schedule: string
  ageGroup: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Registration {
  id: number
  dancerId: number
  danceGroupId: number
  sportCode?: string | null
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED'
  submittedAt?: Date | null
  reviewedAt?: Date | null
  reviewedBy?: number | null
  notes?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Guardian {
  id: number
  dancerId: number
  email: string
  firstName: string
  lastName: string
  address: string
  postalCode: string
  city: string
  phone: string
  authorized: boolean
  createdAt: Date
  updatedAt: Date
  relationship: string
}

export interface EmergencyContact {
  id: number
  dancerId: number
  firstName: string
  lastName: string
  phone: string
  email?: string | null
  relationship: string
  type: 'PARENT' | 'GRANDPARENT' | 'UNCLE_AUNT' | 'SIBLING' | 'FRIEND' | 'OTHER'
  createdAt: Date
  updatedAt: Date
}

// Types avec relations pour les requêtes complexes
export interface DancerWithRelations extends Dancer {
  user?: User
  emergencyContacts?: EmergencyContact[]
  registrations?: Registration[]
  guardian?: Guardian
}

export interface RegistrationWithRelations extends Registration {
  dancer?: DancerWithRelations
  danceGroup?: DanceGroup
  reviewer?: User
}

export interface DanceGroupWithStats extends DanceGroup {
  _count?: {
    registrations: number
  }
  registrations?: RegistrationWithRelations[]
}

// Types pour les API responses
export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
}

export interface PaginatedResponse<T = any> extends ApiResponse<T> {
  total: number
  page: number
  limit: number
}

// Types pour les stats
export interface GroupStats {
  groupId: number
  groupName: string
  description: string
  schedule: string
  ageGroup: string
  totalRegistrations: number
  approvedRegistrations: number
  pendingRegistrations: number
  rejectedRegistrations: number
  isActive: boolean
}