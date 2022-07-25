import { Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { Employee } from './employee.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';
export declare class AppService {
    private employeeRepo;
    private contactInfoRepo;
    private meetingRepo;
    private taskRepo;
    constructor(employeeRepo: Repository<Employee>, contactInfoRepo: Repository<ContactInfo>, meetingRepo: Repository<Meeting>, taskRepo: Repository<Task>);
    seed(): Promise<void>;
    getEmployeeById(id: number): Promise<Employee>;
    deleteEmployee(id: number): Promise<import("typeorm").DeleteResult>;
    getHello(): string;
}
