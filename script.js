const computerPlay = function()
{
    const choices = ['paper','rock','scissors'];
    const choice = Math.floor(Math.random()*3)
    return choices[choice];
}
const playerPlay = function()
{
    const choice = prompt('Enter your choice: ').toLowerCase();
    return choice;
}

const game = function(rounds)
{
    const getWinner = function(playerChoice,computerChoice)
    {
        console.log(computerChoice);
        if(playerChoice=='paper')
        {
            if(computerChoice=='paper')
            {
                return null;
            }
            else if(computerChoice=='rock')
            {
                return 0;
            }
            else if(computerChoice=='scissors')
            {
                return 1;
            }
        }
        else if(playerChoice=='rock')
        {
            if(computerChoice=='paper')
            {
                return 1;
            }
            else if(computerChoice=='rock')
            {
                return null;
            }
            else if(computerChoice=='scissors')
            {
                return 0;
            }
        }
        else if(playerChoice=='scissors')
        {
            if(computerChoice=='paper')
            {
                return 0;
            }
            else if(computerChoice=='rock')
            {
                return 1;
            }
            else if(computerChoice=='scissors')
            {
                return null;
            }
        }
    }
    const result = [0,0,0];
    for(let i=0;i<rounds;i++)
    {
        result[getWinner(playerPlay(),computerPlay())]++;
    }
    console.log(result[0],result[1])
}
game(5);