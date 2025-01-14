function nospace(Str)
    {
        const arr=str.split(" ");
        let newArray =[];
        for(let i=0;i<arr.length;i++)
        {
            const trimstring=arr[i].trim();
            newArray.push(trimstring);
        }
        const finalstring =newarr.join(" ");
        return finalstring;
    }
