function basicop(operation,value1,value2)
           {
            const operationstring=value1+operation+value2;
            const result=eval(operationstring);
            return result;
           }