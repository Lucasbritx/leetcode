function orangesRotting(grid: number[][]): number {
  if (!grid && grid.length === 0) return 0;
  let freshOranges = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let minutes = 0;

  // armazenando na fila as podres
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]);
      } else if (grid[r][c] === 1) {
        freshOranges++;
      }
    }
  }

  // mapear posiveis apodrecimentos
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // [2,1,1],
  // [1,1,0],
  //[0,1,2]]

  let head = 0;

  while (head < queue.length) {
    const [r, c, minute] = queue[head];
    head++;

    for (const [dR, dC] of directions) {
      let nRow = r + dR;
      let nCol = c + dC;
      const isValidPosition =
        nRow >= 0 && nRow < grid.length && nCol >= 0 && nCol < grid[0].length;
      if (isValidPosition && grid[nRow][nCol] === 1) {
        grid[nRow][nCol] = 2;
        queue.push([nRow, nCol, minute + 1]);
        freshOranges--;
        minutes = minute + 1;
      }
    }
  }
  return freshOranges > 0 ? -1 : minutes;
}
