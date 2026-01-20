/* https://leetcode.com/problems/validate-binary-search-tree/description/ */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const isChildrenValidBST = (root, min, max) => {
    if (root === null) return true;
    const { left, right, val } = root;
    if (val <= min || val >= max) {
        return false;
    }
    return isChildrenValidBST(root.left, min, val) && isChildrenValidBST(root.right, val, max);
}

function isValidBST(root: TreeNode | null): boolean {
    if (root === null) return true;
    const { left, right, val } = root;
    return isChildrenValidBST(left, Number.NEGATIVE_INFINITY, val) && isChildrenValidBST(right, val, Number.POSITIVE_INFINITY);
};