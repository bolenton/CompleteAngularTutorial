import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    
    handleError(error: any): void {
        alert('Unexpeced error occured');
        console.log(error);
    }

 }