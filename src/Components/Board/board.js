import { create } from 'domain'
import React from 'react'
import styled from 'styled-components'

const Root = styled.table`
    width: 500px;
    height: 500px;
`

const Cell = styled.td`
    width: 50px;
    height: 50px;
    background-color: ${({ colorscheme }) =>
        colorscheme === 'light' ? 'white' : '#333'};
`

export default function board() {
    const gameboard = createBoard()

    function createBoard() {
        var board = []
        let size = 8

        for (var y = 0; y < size; y++) {
            var row = []
            for (var x = 0; x < size; x++) {
                row.push(x)
            }
            board.push(row)
        }
        console.log(board)
        return board
    }

    return (
        <Root>
            {gameboard.map((row) => (
                <tr key={row}>
                    {row % 2
                        ? row.map((cell) => (
                              <Cell
                                  key={cell}
                                  colorscheme={cell % 2 ? 'light' : 'dark'}
                              />
                          ))
                        : row.map((cell) => (
                              <Cell
                                  key={cell}
                                  colorscheme={cell % 2 ? 'dark' : 'light'}
                              />
                          ))}
                </tr>
            ))}
        </Root>
    )
}
