import java.util.*;
import java.io.*;

class Solution {
    public boolean isValidSudoku(char[][] board) {
        int R = board.length;
        int C = board[0].length;
        Set[] rowHashSet = new HashSet[9];
        Set[] colHashSet = new HashSet[9];
        Set[][] subBoxHashSet = new HashSet[3][3];

        for (int r = 0; r < 9; r ++) {
            rowHashSet[r] = new HashSet<>();
            for (int c = 0; c < 9; c ++){
                System.out.print(board[r][c] + " " + ((c + 1) % 3 == 0 ? "|" : ""));
                int sR = r / 3;
                int sC = c / 3;
                colHashSet[c] = new HashSet<>();
                if (subBoxHashSet[sR][sC] == null ) subBoxHashSet[sR][sC] = new HashSet<>();
                if (board[r][c] == '.') continue;
                if (
                    rowHashSet[r].contains(board[r][c])
                    || colHashSet[c].contains(board[r][c])
                    || subBoxHashSet[sR][sC].contains(board[r][c])
                ) {
                    return false;
                }
                rowHashSet[r].add(board[r][c]);
                colHashSet[c].add(board[r][c]);
                subBoxHashSet[sR][sC].add(board[r][c]);
            }
            if ((r + 1) % 3 == 0) System.out.printf("\n_____________________\n");
            else System.out.println();
        }
        


        return true;
    }

    public static void main (String[] args) {
        char[][] input = new char[9][9];
        System.out.println(args[0]);


        // new Solution().isValidSudoku()
    }
}