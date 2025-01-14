function getcount(str)
           {
            let vowelcount=0;
            const arr=str.split("");
            for(let i=0;i<arr.length;i++)
            {
                switch(arr[i])
                {
                    case 'a':
                        vowelcount++;
                        break;
                        case 'e':
                        vowelcount++;
                        break;
                        case 'i':
                        vowelcount++;
                        break;
                        case 'o':
                        vowelcount++;
                        break;
                        case 'u':
                        vowelcount++;
                        break;

                }
            }
            return vowelcount;
           } 
