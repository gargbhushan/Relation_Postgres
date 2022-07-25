"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contact_info_entity_1 = require("./contact-info.entity");
const employee_entity_1 = require("./employee.entity");
const meeting_entity_1 = require("./meeting.entity");
const task_entity_1 = require("./task.entity");
let AppService = class AppService {
    constructor(employeeRepo, contactInfoRepo, meetingRepo, taskRepo) {
        this.employeeRepo = employeeRepo;
        this.contactInfoRepo = contactInfoRepo;
        this.meetingRepo = meetingRepo;
        this.taskRepo = taskRepo;
    }
    async seed() {
        const ceo = this.employeeRepo.create({ name: 'Mr. CEO' });
        await this.employeeRepo.save(ceo);
        const ceoContactInfo = this.contactInfoRepo.create({ email: 'email@email.com',
        });
        ceoContactInfo.employee = ceo;
        await this.contactInfoRepo.save(ceoContactInfo);
        const manager = this.employeeRepo.create({
            name: 'his_name',
            manager: ceo,
        });
        const task1 = this.taskRepo.create({ name: 'Hire people' });
        await this.taskRepo.save(task1);
        const task2 = this.taskRepo.create({ name: 'Present to CEO' });
        await this.taskRepo.save(task2);
        manager.tasks = [task1, task2];
        const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
        meeting1.attendees = [ceo];
        await this.meetingRepo.save(meeting1);
        manager.meetings = [meeting1];
        await this.employeeRepo.save(manager);
    }
    getEmployeeById(id) {
        return this.employeeRepo
            .createQueryBuilder('employee')
            .leftJoinAndSelect('employee.directReports', 'directReports')
            .leftJoinAndSelect('employee.meetings', 'meetings')
            .leftJoinAndSelect('employee.tasks', 'tasks')
            .where('employee.id = :employeeId', { employeeId: id })
            .getOne();
    }
    deleteEmployee(id) {
        return this.employeeRepo.delete(id);
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(1, (0, typeorm_1.InjectRepository)(contact_info_entity_1.ContactInfo)),
    __param(2, (0, typeorm_1.InjectRepository)(meeting_entity_1.Meeting)),
    __param(3, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map