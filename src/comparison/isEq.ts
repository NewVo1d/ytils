import { isBool } from "../type/isBool";
import { isDate } from "../type/isDate";
import { isFunc } from "../type/isFunc";
import { isNum } from "../type/isNum";
import { isStr } from "../type/isStr";
import { isStrictEq } from "./isStrictEq";
import { isTypeEq } from "./isTypeEq";

/**
 * Checks whether lhs and rhs are equal on primitive value and with the same type.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are equal on primitive value and with the same type, else false
 * @example
 *
 * isEq(6, 6)
 * // true
 *
 * isEq(6, new Number(6))
 * // true
 *
 * isEq("6", new String("6"))
 * // true
 *
 * isEq(new Date(31415926), new Date(31415926))
 * // => true
 *
 * isEq(6, "6")
 * // => false
 *
 * isEq({}, {})
 * // => false
 *
 * isEq([], [])
 * // => false
 */
export function isEq(lhs: any, rhs: any): boolean {
    if (isStrictEq(lhs, rhs)) return true;
    if (!isTypeEq(lhs, rhs)) return false;
    if (isNum(lhs)) return +lhs === +rhs;
    if (isBool(lhs) || isStr(lhs)) return lhs == rhs;
    if (isFunc(lhs)) return lhs.toString() === rhs.toString();
    if (isDate(lhs)) return lhs.getTime() === rhs.getTime();
    return lhs === rhs;
}
