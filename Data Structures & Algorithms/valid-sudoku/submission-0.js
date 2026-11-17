class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        // travel through the rows
        for (let i = 0; i < board.length; i++){
            const hasSeen = new Set()
            for (let j = 0; j < board.length; j++){
                if (board[i][j] !== "." && !hasSeen.has(board[i][j])){
                    hasSeen.add(board[i][j])                 
                } else if (board[i][j] !== "." && hasSeen.has(board[i][j])){
                    return false
                }
            }   
        }
        // travel through the columns
        for (let i = 0; i < board.length; i++){
            const hasSeen = new Set()
            for (let j = 0; j < board.length; j++){
                if (board[j][i] !== "." && !hasSeen.has(board[j][i])){
                    hasSeen.add(board[j][i])
                } else if (board[j][i] !== "." && hasSeen.has(board[j][i])){
                    return false
                }
            }             
        }
        // travel through the squares
        const boxes = Array.from({length: 9}, () => new Set())
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                const val = board[i][j]
                if (val === ".") continue
                
                const box = Math.floor(i / 3) * 3 + Math.floor(j/ 3)
                console.log(box, "box")
                if (boxes[box].has(val)){
                    return false 
                } else {
                    boxes[box].add(val)
                }
            }
        }
        return true
    }
}
