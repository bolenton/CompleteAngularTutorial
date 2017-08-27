import { Injectable } from '@angular/core';

export class AuthorsService {
  getActors = (): Array<string> => { 
    return ["Andy", "Steve", "Josh"]};
}
