
class SortAlgorithm{

	static bubbleSort(arr){//O(n2)

		for(let i = 0; i < arr.length; i++){//控制循环次数
			let flag = false;
			for(let j = 0; j < arr.length - i; j++){//控制比较
				if(arr[j] > arr[j+1]){
					SortAlgorithm.swap(arr, j, j+1);
					flag = true; 
				}
			}
			if(!flag){
				break;
			}
		}

	}

	static selectionSort(arr){//O(n2)

		for(let i = 0; i < arr.length; i++){
			let min = i;
			for(let j = i+1; j < arr.length; j++){
				if(arr[min] > arr[j]){
					min = j;	
				}
			}
			if(min != i){
				SortAlgorithm.swap(arr, i, min);
			}
		}
	}

	static insertionSort(arr){//O(n2)

		let i,//未排序部分下标
		 j;//已排序部分下标
		for(i = 0; i < arr.length; i++){//移动未排序部分
			let tmp = arr[i];
			for(j = i - 1; j > -1 && arr[j] > tmp; j--){//移动已排序部分
				arr[j+1] = arr[j];
			}
			arr[j+1] = tmp;
		}
	}

	static mergeSort(arr){//O(nlogn)
		if(arr.length < 2){
			return arr;	
		}

		let middle = Math.floor(arr.length/2),
			left = arr.slice(0, middle),
			right = arr.slice(middle);
		return SortAlgorithm.merge(SortAlgorithm.mergeSort(left), SortAlgorithm.mergeSort(right));
	}

	static merge(left, right){
		let result = [],
			ir = 0, il = 0; 
		while(il < left.length && ir < right.length){
			if(left[il] < right[ir]){
				result.push(left[il++]);
			}else{
				result.push(right[ir++]);
			}
		}

		return result.concat(left.slice(il)).concat(right.slice(ir));
	}

	static quickSort(arr, left, right){
		if(left < right){
			let i = left, j = right, point = arr[i];
			while(i < j){
				while(i < j && arr[j] >= point){
					j--;
				}
				if(i < j){
					arr[i++] = arr[j];
				}
				while(i < j && arr[i] < point){
					i++;
				}
				if(i < j){
					arr[j--] = arr[i];
				}
			}
			arr[i] = point;
			SortAlgorithm.quickSort(arr, left, i-1);
			SortAlgorithm.quickSort(arr, i+1, right);
		}
	}

	static shellSort(arr){//TODO 
		let gap = Math.floor(arr.length/2);
		while(gap > 0){


			gap = Math.floor(gap/2);
		}
	}

	static swap(arr, a, b){
		let tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}

}

module.exports = SortAlgorithm;