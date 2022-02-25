export class Like
{
    private count:number
    islikeselected:boolean
    constructor(x:number,islikeselected:boolean)
    {
        this.count=x;
        this.islikeselected=islikeselected;
    }
    Onclick=()=>
    {
        if(this.islikeselected)
        {
            this.islikeselected=!this.islikeselected;
            this.count-=1;
        }
        else{
            this.islikeselected=!this.islikeselected;
            this.count+=1
        }
    }
    getCount()
    {
        return this.count
    }

    /*

    this.count+=(this.isselected)? 1 : -1
    this.isselected=!this.isselected

    */
}
