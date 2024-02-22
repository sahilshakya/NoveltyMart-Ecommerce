export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVerified: string;
  isActive: string;
  role: { name: string };
  completeUser: boolean;
}
