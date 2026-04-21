export type StaffMember = {
  id: string;
  name: string;
};

export const staffMembers: StaffMember[] = [
  { id: "any", name: "Any staff member" },
  { id: "jacob-anderson", name: "Jacob Anderson" },
  { id: "john", name: "John" },
  { id: "joseph-ron", name: "Joseph Ron" },
  { id: "sophia-wilson", name: "Sophia Wilson" },
];

export type BookableService = {
  id: "computer" | "printer" | "appliance" | "maintenance";
  title: string;
  durationMinutes: number;
  kind: "Doorstep Service";
};

export const services: BookableService[] = [
  { id: "computer", title: "Computer Repair", durationMinutes: 60, kind: "Doorstep Service" },
  { id: "printer", title: "Printer Service", durationMinutes: 60, kind: "Doorstep Service" },
  { id: "appliance", title: "Appliance Repair", durationMinutes: 90, kind: "Doorstep Service" },
  { id: "maintenance", title: "Maintenance", durationMinutes: 60, kind: "Doorstep Service" },
];

