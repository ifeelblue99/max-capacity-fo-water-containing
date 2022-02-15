/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

*/

let heights = [1,9,6,2,5,4,8,3,10]

//function to draw heights
function drawHeightsToConsole(arr){
  console.log("---heights---")
  arr.forEach(el=>{
    console.log(el,Array(parseInt(el+1, 10)).join("_"))
  })
  console.log("---heights---")
}
drawHeightsToConsole(heights)
//

// function to calculate max amount of water that can be contained
function maxAmountofWater(height){
  let leftIndex = 0,
      rightIndex = height.length-1,
      maxArea = 0
  
  while (leftIndex<rightIndex) {
    
    minHeightIndex = height[leftIndex]<height[rightIndex]?leftIndex:rightIndex
    
    let currentArea = (rightIndex-leftIndex)*heights[minHeightIndex]
    
    maxArea = maxArea>currentArea?maxArea:currentArea
    
    leftIndex++ 
  }
  console.log("max amount of water:",maxArea)
  
}
maxAmountofWater(heights)
