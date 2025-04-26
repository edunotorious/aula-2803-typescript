export type Appointment = {
    id: string;
    doctorId: string;
    date: string;
    time: string;
    description: string;
    status: string;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    CreateAppointment: undefined;
    Profile: undefined;
  };