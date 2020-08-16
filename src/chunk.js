const getChunkedArray = (completeArray, chunkSize) => {
	let chunkedArrays = [];
	let i = 0;
	while(i < completeArray.length){
	   let chunkArray = completeArray.slice(i, i+chunkSize);
	   i = i + chunkSize;
	   chunkedArrays.push(chunkArray);
	}
	return chunkedArrays;
};

let inputArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(getChunkedArray(inputArr, 3));