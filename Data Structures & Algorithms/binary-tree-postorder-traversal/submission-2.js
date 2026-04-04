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
    postorderTraversal(root) {
        const traversalArr = []
        const traversalHelper = (node)=>{
            if(!node) return
            traversalHelper(node.left)
            traversalHelper(node.right)
            traversalArr.push(node.val)
            return
        }
        traversalHelper(root)
        return traversalArr
    }
}
