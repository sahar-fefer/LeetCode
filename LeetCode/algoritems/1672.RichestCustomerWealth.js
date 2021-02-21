var maximumWealth = function(accounts) {
        let richest = 0;
        for (let i = 0; i < accounts.length; i++) {
            let curAccount = 0;
            console.log('accounts[i]', accounts[i])
            for (let j = 0; j < accounts[i].length; j++) {
                console.log('accounts[i][j]', accounts[i][j])
                curAccount += accounts[i][j]
            }
            if ( curAccount > richest ) {
                richest = curAccount
            };
        }
    return richest
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))