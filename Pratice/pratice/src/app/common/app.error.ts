export class AppError
{
    constructor(public originalerror?:any)
    {
        console.log(originalerror);
    }
}