export interface Tour {
    id?: string; 
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    destinations: Destination[];
    status: 'planned' | 'completed';
}
export interface Destination {
    city: string;
    activities?: string[];
    days?: number;
  }