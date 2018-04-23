
function quickSort(arr, low = 0, high) {

    if (high === undefined) { high = arr.length - 1; }
    if (low < high) {
        pivot = partition(arr, low, high);
        arr = quickSort(arr, low, pivot - 1);
        arr = quickSort(arr)
    }

    return arr;
    
}

function partition(arr, low, high) {

    var pivot = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, high);
    return (i+1)

}

function swap(arr, a , b){

	var temp;
	temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return arr;
	  
}