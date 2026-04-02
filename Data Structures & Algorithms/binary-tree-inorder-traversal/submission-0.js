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
    constructor(){
        this.inorderTraversalArr = []
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const traversalHelper = (root)=>{
            if(!root) return 
            if(!!root.left){
                traversalHelper(root.left)
                
            }
            this.inorderTraversalArr.push(root.val)
            if(!!root.right){
                traversalHelper(root.right)
                
            }
            
            return
        }
        traversalHelper(root)
        return this.inorderTraversalArr
    }
}
