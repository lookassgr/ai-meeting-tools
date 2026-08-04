export interface Meeting {
  id: string;
  title: string;
  date: string;
  participants: number;
  status: "Processing" | "Completed" | "Draft";
}