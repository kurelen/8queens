function column_string(position) {
    let s = "|";
    for (let i = 0; i < 8; i++) {
        s += i === position ? "Q|" : "_|";
    }
    return s + "\n";
}

function board_string(board) {
    let s = "_________________\n";
    for (let i = 0; i < 8; i++) {
        s += column_string(board[i]);
    }
    return s + "‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n";
}

function is_valid(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = i + 1; j < board.length; j++) {
            if (board[i] === board[j]) {
                return false;
            }
            const dcol = j - i;
            const drow = Math.abs(board[i] - board[j]);
            if (dcol === drow) {
                return false;
            }
        }
    }

    return true;
}

function find_all_solutions() {
    return [];
}

module.exports = {
    board_string,
    is_valid,
    find_all_solutions,
};
