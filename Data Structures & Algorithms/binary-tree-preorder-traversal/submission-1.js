/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const traversalArr = []
        const traversalHelper = (node) =>{
            if(!node) return
            traversalArr.push(node.val)

                traversalHelper(node.left)

                traversalHelper(node.right)

            return
        }
        traversalHelper(root)
        return traversalArr
    }
}
