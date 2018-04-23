 function bubbleSort(array, ind){

	if (array === []) { return []; }
	if (ind === undefined) { ind = array.length - 1; }
	if (ind === 0) { return array; }

	var swap_bool = false;
	for (var i = 0; i < ind; i++) {
		if (array[i] > array[i + 1]) {
			array = swap(array, i, i + 1);
			swap_bool = true;
		}
	}

	if (!swap_bool) { return array; }
	else { return bubbleSort(array, ind - 1); }
}

function swap(arr, a , b){

	var temp;
	temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return arr;
	  
}
