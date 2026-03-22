function position_to_column_string(position) {
    let s = "|";
    for (let i = 0; i < 8; i++) {
        s += i === position ? "Q|" : "_|";
    }
    return s + "\n";
}

function board_to_string(board) {
    let s = "_________________\n";
    for (let i = 0; i < 8; i++) {
        s += position_to_column_string(board[i]);
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
    const solutions = [];
    const board = [-1];

    while (board.length !== 0) {
        let position = board.pop() + 1;
        if (position > 7) {
            continue;
        }
        board.push(position);
        if (!is_valid(board)) {
            continue;
        }
        if (board.length === 8) {
            solutions.push(board.slice());
            continue;
        }
        board.push(-1);
    }

    return solutions;
}

module.exports = {
    board_to_string,
    find_all_solutions,
};
