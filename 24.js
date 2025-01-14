function getavg(scorearray)
           {
           const count=scorearray.length;
           let sum=0;
           for(let i=0;i<count;i++)
           {
           sum=sum+scorearray[i];
           }
           const avg=sum/count;
           const roundeddown=Math.floor(avg);
           return roundeddown;
           }
