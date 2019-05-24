import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private emplist: Employee[] = [
    new Employee(1, 'santosh', 'Pune'),//{EmpID=1, Name="Santosh", City="Pune"},
    new Employee(2, 'Rahul', 'Goa'),
    new Employee(3, 'Vishal', 'Mumbai'),
    new Employee(4, 'Dhiraj', 'Kolhapur'),
  ];

  constructor() { }

  getEmployee() {
    return this.emplist;
  }

  getEmployeeById(EmpId) {
    return this.emplist.find(a => a.EmpID == EmpId);
  }

  saveDetails(emp: Employee) {
    var max = this.emplist.reduce(function (pre, current) {
      return (pre.EmpID > current.EmpID) ? pre : current
    });

    emp.EmpID = max.EmpID + 1;
    this.emplist.push(emp);
    return emp.EmpID;
  }

  updateDeatils(emp: Employee) {
    this.emplist.forEach((t, i) => {
      if (t.EmpID === emp.EmpID) {
        this.emplist[i] = emp;
      }
    });
    return emp.EmpID;
  }


  deleteDeatils(Id: number) {

    this.emplist.forEach((t, i) => {
      alert(Id);
      if (t.EmpID === Id) { this.emplist.splice(i, 1); }
    });
    return Id;
  }

}
