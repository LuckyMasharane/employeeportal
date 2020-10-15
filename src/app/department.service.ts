import { Injectable } from '@angular/core';
import { Department } from './department';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private db: AngularFirestore) { }

  getAllDepartment(){
    return this.db.collection("department").valueChanges()
  }

  addDepartment(department: Department) {
    let name = department.depName + 1
    this.db.collection("projects").doc(name.toString()).set({
      depName: department.depName,
      depEmpCount: department.depEmpCount,
      depId: department.depId,
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}
