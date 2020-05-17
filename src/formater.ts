import { listenerCount } from "cluster";
import { Z_BLOCK } from "zlib";

const columMarker = "+";
const horizontalMarker = '-';
const verticalMarker = "|";
const tabSpaces = 4;


function format(textBlock: Array<string>) : Array<string> {
    if (textBlock.length > 0) {
    const columnsCount = countColumns(textBlock[0]);

    return [];
    }

}

class TableData{
    readonly columns: number;
    readonly columnsWidth: Array<number>;
    readonly rows: Array<Array<string>>;
    readonly spacePadding: number;


}

export function countColumns(line: string) : number {
    const r = (line.match(new RegExp("\\"+ columMarker + "|" + "\\" + verticalMarker  + "+","g")) || []).length;
    return (r -1) < 0 ? 0 : r - 1;
}

export function getPadding(line: string) : number {
    const tmp = line.replace(/\t/g," ".repeat(tabSpaces));
    return tmp.search(/\S/);
}

function getWidth(block: string) : number{
    return block.trim().length;
}

export function getColumnWidths(lines: Array<string>): Array<number>{
    const columnsCount = countColumns(lines[0]);
    let result = new Array(columnsCount).fill(0);

    for (const line of lines){
        let columns = line.split(/\||\+/);
        columns.shift();
        columns.forEach((column, columnIndex) => {
            const width = getWidth(column);
            if ( width > result[columnIndex] ){
                result[columnIndex] = width;
            }
        });
    }
    return result;
}