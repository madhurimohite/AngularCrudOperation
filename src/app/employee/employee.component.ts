import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Employee} from '../entity/employee';;
import { EmployeeService } from '../service/employee.service'
//import { $ } from 'protractor';

declare var $:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
public emplist: Employee[]=[];
public boolSave=false;
public boolUpdate =false;
public boolDelete=false;
public operation="";

public empForm: Employee;

  constructor(private objEmployeeService: EmployeeService) { 
    this.empForm= new Employee(0,"","");
  }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
  this.emplist=this.objEmployeeService.getEmployee();
  }

  getForAddNew(){
    this.boolSave=true;
    this.boolUpdate=false;
    this.boolDelete=false;
    this.operation="Add New";
    this.empForm=new Employee(0,"","");

    $("#myModal").modal('show');
  }

  getForEdit(EmpID){
    this.boolSave=false;
    this.boolUpdate=true;
    this.boolDelete=false;
    this.operation="Edit";
    var emp:Employee= this.objEmployeeService.getEmployeeById(EmpID);
    this.empForm=new Employee(emp.EmpID, emp.Name, emp.City);
    $("#myModal").modal('show');
  }


  getForDelete(EmpID){
  
    this.boolSave=false;
    this.boolUpdate=false;
    this.boolDelete=true;
    this.operation="Delete";
    var emp:Employee= this.objEmployeeService.getEmployeeById(EmpID);
    this.empForm=new Employee(emp.EmpID, emp.Name, emp.City);
    $("#myModal").modal('show');
  }

  save(empres:Employee){
   var result= this.objEmployeeService.saveDetails(empres);
   if(result!=null && result>0){
    
    alert("Record Inserted");
    $("#myModal").modal('hide');
   }
   else{
    alert("Operation Failed!!");
   }
 }

 update(empres:Employee){
  var result= this.objEmployeeService.updateDeatils(empres);
  if(result!=null && result>0){
   $("#myModal").modal('Hide');
   alert("Record Updated");
  }
  else{
   alert("Operation Failed!!");
  }
}


delete(Id:number){
  var result= this.objEmployeeService.deleteDeatils(Id);
  if(result!=null && result>0){
   $("#myModal").modal('Hide');
   alert("Record Deleted");
  }
  else{
   alert("Operation Failed!!");
  }
}


}
