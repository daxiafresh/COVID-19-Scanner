import React from 'react'

const TableRow = (props) => {
    console.log(props.img)
    return (
        <tr>                        
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{props.filename}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap"></p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{props.prediction}</p>
            </td>
            
        </tr>
    )
}

export default TableRow;