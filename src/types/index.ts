// types.ts
export type Doctor = {
    id: string;
    name: string;
    specialty: string;
    image: string;
 };
 
 export type Appointment = {
    doctorId: string;
    date: Date;
    time: string;
    description: string;
 };
 