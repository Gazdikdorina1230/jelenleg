

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUserSub = new BehaviorSubject<boolean>(false);
  private loggedUserSubject = new BehaviorSubject<firebase.User | null>(null);



  constructor(private http:HttpClient,private AngularFAuth:AngularFireAuth,private router:Router) {}

  
  register(email: string, password: string) {
    return this.AngularFAuth.createUserWithEmailAndPassword(email, password).then(()=>
      this.logout()).then(()=>this.router.navigate(['login']))
  }
      // this.registeredUser = { ...userData };
    // console.log('Felhasználó regisztrálva:', this.registeredUser);
    registerorloginWithGoogle(): Promise<void> {
      return this.AngularFAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(cred => {
        if (cred.user) {
          this.loggedUserSubject.next(cred.user);
        }
      })}
  
  login(email: string, password: string): Promise<any> {
    return this.AngularFAuth.signInWithEmailAndPassword(email, password)
  }
        // if (this.registeredUser && this.registeredUser.email === email && this.registeredUser.password === password) {
    //   console.log('Bejelentkezve:', this.registeredUser);
    //   return true;
  

  
  isUserState() {
    return this.AngularFAuth.authState;
  }

  
  getRegisteredUser() {
    return this.loggedUserSub;
  }

  
  logout(): Promise<void> {
    return this.AngularFAuth.signOut().then(() => {
      this.loggedUserSubject.next(null);
      console.log('Felhasználó kijelentkezve');
    });
    // this.registeredUser = null;  
    
  }
}

