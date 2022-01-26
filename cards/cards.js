 export default function fn(arr, n, m)
    {
     
        // Left array
        var left = Array(n).fill(0);
         
        // Right array
        var right = Array(n).fill(0);
         
        // Array will contain zeroes position
        var zero_pos = new Array();
         
        // Stores count
        var count = 0;
        var previous_index_of_zero = -1;
        for (var i = 0; i < n; i++) {
            if (arr[i] != 0) {
                count++;
            } else {
                left[i] = count;
                zero_pos.push(i);
                if (previous_index_of_zero != i && previous_index_of_zero != -1) {
                    right[previous_index_of_zero] = count;
                }
                count = 0
                previous_index_of_zero = i;
            }
        }
        right[previous_index_of_zero] = count;
 
        var max_one = -1;
        var result_index = Array();
        var i = 0;
 
        while (i <= (zero_pos.length) - m) {
            var temp = 0;
            var index =  Array();
 
            for (var c = 0; c < m; c++)
            {
                temp += left[zero_pos[i + c]] + right[zero_pos[i + c]] + 1;
                 
                index.push(zero_pos[i + c]);
            }
             
            temp = temp - (m - 1);
            if (temp > max_one) {
                max_one = temp;
                result_index = index;
            }
            i += 1;
        }
 
        return result_index;
    }
 
        var arr = [ 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1 ];
        var m = 2;
        var n = arr.length;
        document.write("Index of zeroes that are flipped: [");
        var result_index = maximized_one(arr, n, m);
        for (var i = 0; i < result_index.length; i++) {
            document.write(result_index[i] + " ");
        }
        document.write("]");