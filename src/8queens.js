function render_row(position, board_size = 8) {
    let s = "|";
    for (let i = 0; i < board_size; i++) {
        s += i === position ? "Q|" : "_|";
    }
    return s + "\n";
}

function board_to_string(board, board_size = 8) {
    const border = board_size * 2 + 1;
    let s = "";
    for (let i = 0; i < border; i++) {
        s += "_";
    }
    s += "\n";
    for (let i = 0; i < board_size; i++) {
        s += render_row(board[i], board_size);
    }
    for (let i = 0; i < border; i++) {
        s += "‾";
    }
    return s + "\n";
}

function is_valid(board) {
    // Only check if the last added element would cause trouble
    const last_index = board.length - 1;
    if (last_index < 1) {
        return true;
    }
    const last_value = board[last_index];
    for (let i = 0; i < last_index; i++) {
        if (board[i] === last_value) {
            return false;
        }
        const drow = last_index - i;
        const dcol = Math.abs(last_value - board[i]);
        if (dcol === drow) {
            return false;
        }
    }
    return true;
}

function find_all_solutions(board_size = 8) {
    const solutions = [];
    const board = [-1];

    while (board.length !== 0) {
        const position = board.pop() + 1;
        if (position >= board_size) {
            continue;
        }
        board.push(position);
        if (!is_valid(board)) {
            continue;
        }
        if (board.length === board_size) {
            solutions.push(board.slice());
            continue;
        }
        board.push(-1);
    }

    return solutions;
}

function count_solutions(board_size = 8) {
    if (board_size > 30) {
        return -1;
    }
    const all = (1 << board_size) - 1;

    function solve(cols, diag_left, diag_right) {
        if (cols === all) {
            return 1;
        }
        let count = 0;
        let available = all & ~(cols | diag_left | diag_right);
        while (available) {
            const bit = available & -available;

            available -= bit;
            count += solve(
                cols | bit,
                (diag_left | bit) << 1,
                (diag_right | bit) >> 1
            );
        }
        return count;
    }

    return solve(0, 0, 0);
}

module.exports = {
    board_to_string,
    find_all_solutions,
    count_solutions,
};
