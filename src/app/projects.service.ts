import { Injectable } from '@angular/core';
import { Project } from './project';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private db: AngularFirestore) { }

  getAllProjects(){
    return this.db.collection("projects").valueChanges()
  }
  addEmployee(project: Project) {
    let name = project.projectName + 1
    this.db.collection("projects").doc(name.toString()).set({
      projectName: project.projectName,
      projectDetails: project.projectDetails,
      Department: project.Department,
      logo: project.logo
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}
