import { ContactInfo } from "./contact-info.entity";
import { Meeting } from "./meeting.entity";
import { Task } from "./task.entity";
export declare class Employee {
    id: number;
    name: string;
    manager: Employee;
    directReports: Employee[];
    contactInfo: ContactInfo;
    tasks: Task[];
    meetings: Meeting[];
}
