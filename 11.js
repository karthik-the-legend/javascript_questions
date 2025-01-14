function century(year)
   {
    if(year<100)
    {
        return 1;
    }
    const firsttwodigits = year.toString().substr(0,2);
    if(year % 100===0)
    {
        return number(firsttwodigits);
    }
    else{
        return number(firsttwodigits) +1;
    }
    }
