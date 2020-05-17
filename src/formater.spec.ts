import { countColumns , getPadding, getColumnWidths } from "./formater";
import * as assert from "assert";




describe("formater", function () {

    it("countColum", function () {
        // const line = "+";
        const line = "         +---+---- +------+";

        assert.equal(3, countColumns(line) );
    });
    it("countColum1", function () {
        // const line = "+";
        const line = "         |--|---- +------+";

        assert.equal(3, countColumns(line) );
    });
    it("countColum2", function () {
        // const line = "+";
        const line = "         --------- --------";

        assert.equal(0, countColumns(line) );
    });
    it("countColum3", function () {
        // const line = "+";
        const line = "         ---------+ --------";

        assert.equal(0, countColumns(line) );
    });

    it("padding1", function () {
        // const line = "+";
        const line = "         +---+---- +------+";

        assert.equal(9, getPadding(line) );
    });

    it("padding2", function () {
        // const line = "+";
        const line = "+---+---- +------+";

        assert.equal(0, getPadding(line) );
    });

    it("padding3", function () {
        // const line = "+";
        const line = "       +---+---- +------+";

        assert.equal(7, getPadding(line) );
    });

    it("getColumnWidths", function () {
        // const line = "+";
        const lines = ["+---++------+",
                       "| 123 | 1 | 12345678 |",
                       "| 123 | 1 | 123456789012 |",
                       "| 123 | 1 | 1 |"];

        assert.deepEqual([3,1,12], getColumnWidths(lines) );
    });

    it("getColumnWidths2", function () {
        // const line = "+";
        const lines = ["+++|+|",
                       "| 123 || 12345678 | +|",
                       "| 123 | + | 123456789012 | +",
                       "|      |      + | 1 |+"];

        assert.deepEqual([3,0,8,12,0], getColumnWidths(lines) );
    });

});