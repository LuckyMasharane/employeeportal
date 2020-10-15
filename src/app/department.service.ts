import { Injectable } from '@angular/core';
import { Department } from './department';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private db: AngularFirestore) { }
}
