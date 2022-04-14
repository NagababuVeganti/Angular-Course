import { ErrorHandler } from "@angular/core";

export class globalErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        alert('Golbal error handler')
        // we can also use toast notifcation, or we can also edit the implementation in later point of time.
    }
}