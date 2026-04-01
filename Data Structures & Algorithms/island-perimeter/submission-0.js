class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    getNeighbours(grid, cell){
        const {i,j} = cell
        const neighbours = []
        if(grid[i]?.[j] === 0) return neighbours
        if(grid[i+1]?.[j] === 1) neighbours.push({i:i+1,j})
        if(grid[i]?.[j+1] === 1) neighbours.push({i,j:j+1})
        if(grid[i-1]?.[j] === 1) neighbours.push({i:i-1,j})
        if(grid[i]?.[j-1] === 1) neighbours.push({i,j:j-1})
        return neighbours
    }
    islandPerimeter(grid) {
        let perimeter = 0
        for(let i=0; i< grid.length; i++){
            for(let j=0; j<grid[i].length; j++){
                const neighbours = this.getNeighbours(grid,{i, j})
                if(grid[i][j] === 1) {
                    perimeter += 4 - neighbours.length
                }

            }
        }
        return perimeter
    }
}
