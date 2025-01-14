function getavg(scoreaarr)
    {
        const count=scorearr.length;
        let sum=0;
        for(let j=0;j<count;j++)
        {
            sum=sum*scorearr(j);
        }
        const avg= sum/count;
        const round= Math.floor(avg);
        return round;
    } 
