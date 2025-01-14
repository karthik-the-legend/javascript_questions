class smallestintegerfinder{
    findsmallestint(arrayofnumbers)
    {
        let smallestnumber;
        for(let i=0;i<arrayofnumbers.length;i++)
        {
            const arrnumber=arrayofnumbers[i];
            if(i===0)
            {
            smallestnumber=arrnumber;
            }
            if(arrnumber<smallestnumber)
            {
                smallestnumber =arrnumber;
            }
        }
        return smallestnumber;
    }
}
