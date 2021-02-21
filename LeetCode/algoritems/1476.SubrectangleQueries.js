var SubrectangleQueries = function (rectangle) {
    SubrectangleQueries.prototype.rectangleMatrix = rectangle[1][0][0];

    const actions = rectangle[0];
    const values = rectangle[1];

    const result = [];

    for (let i = 0; i < actions.length; i++) {
        const curAction = actions[i];
        let row1 = null;
        let col1 = null;
        let row2 = null;
        let col2 = null;
        let newValue = null;

        for (let j = 0; j < values[i].length; j++) {
            switch (j) {
                case 0: row1 = values[i][j]; break;
                case 1: col1 = values[i][j]; break;
                case 2: row2 = values[i][j]; break;
                case 3: col2 = values[i][j]; break;
                case 4: newValue = values[i][j]; break;
            }
        }

        switch (curAction) {
            case "SubrectangleQueries": result.push(null); break;
            case "updateSubrectangle": result.push(SubrectangleQueries.prototype.updateSubrectangle(row1, col1, row2, col2, newValue)); break;
            case "getValue": result.push(SubrectangleQueries.prototype.getValue(row1, col1)); break;
        }
    }
    return result;
};
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    for (let i = row1; i < row2 + 1; i++) {
        for (let j = col1; j < col2 + 1; j++) {
            SubrectangleQueries.prototype.rectangleMatrix[i][j] = newValue;
        }
    }
    return null;
};

SubrectangleQueries.prototype.getValue = function (row, col) {
    return SubrectangleQueries.prototype.rectangleMatrix[row][col]
};

const subrectangleQueries = new SubrectangleQueries([[
    "SubrectangleQueries",
    "getValue",
    "updateSubrectangle",
    "getValue",
    "getValue",
    "updateSubrectangle",
    "getValue",
    "getValue"
],
[
    [[[1, 2, 1], [4, 3, 4], [3, 2, 1], [1, 1, 1]]],
    [0, 2],
    [0, 0, 3, 2, 5],
    [0, 2],
    [3, 1],
    [3, 0, 3, 2, 10],
    [3, 1],
    [0, 2]
]])

console.log(subrectangleQueries)