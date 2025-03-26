// code your solution here
// Function to find the year of a Super Bowl win
function superbowlWin(record) {
    let win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Export the function
module.exports = {
    superbowlWin
};
