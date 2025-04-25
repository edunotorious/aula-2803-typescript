// types.ts

// Tipos de navegação
export type RootStackParamList = {
    Home: undefined;
    CreateAppointment: undefined;
    // Outras telas...
  };
  
  // Definição do tipo Appointment
  export interface Appointment {
    id: string;
    doctorId: string;
    date: string;
    time: string;
    description: string;
    status: string;
  }
  
  // Definição do tipo Doctor
  export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    image: string;
  }
  