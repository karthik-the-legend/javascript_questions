const rps=(p1,p2)=> {
    if(p1=== p2) return "draw!"; 
    var rules= {rock: "scissors", paper: "rock",scissors:"paper"};
    if(p2===rules[p1])
    {
    return "player 1 won!";
    }
    else
    {
    return "player 2 won!";
    }
    };
