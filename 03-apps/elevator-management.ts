interface Elevator {
  id: number; // Elevator identitification number
  status:
    | "idle"
    | "moving"
    | "stoped"
    | "boarding"
    | "opening"
    | "closing"
    | "maintainance"
    | "emergency"
    | "alert";
  isDoorOpen: boolean; // Door open indicator
  doorOpenTime: number; // How long the door stays open
  doorOpenCloseSpeed: number; // Speed of door opening and closing
  hasEmergency: boolean;
  typeOfEmergency:
    | "door malfunction"
    | "power outage"
    | "medical"
    | "fire"
    | "security incident";
  direction: "up" | "down" | "idle";
  previousFloor: number;
  currentFloor: number;
  destinationFloors: number[]; // Floors requested on the Elevator Panel
  priority: 0 | 1 | 2; // Lift priority (0: Rescue Teams , 1: Special groups , 2: Normal use)
  currentWeight: number;
  currentPassengers: number;
  passengersServedToday: number;
  floorsServedToday: number[]; // What floors have been served how often tday
  passengersPerFloorServedToday: number[]; // How many passengers have been served per floor today;
  nextInspection: number[]; // Next inspection date [YYYY, MM, DD]
  elevatorSpecs: {
    maxSpeed: number; // Maximum speed in m/sec
    acceleration: number;
    maxWeight: number;
    maxPassengers: number;
  };
}

interface Building {
  lowFloor: number;
  highFloor: number;
  groundFloor: number;
  restrictedFloors: number[];
  authorizedFloors: number[];
  emergencyExitFloors: number[];
  isOnAlarm: boolean; // Indicator that the building is on Alarm
}
