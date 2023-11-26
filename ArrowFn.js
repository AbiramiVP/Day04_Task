//1. Print the odd numbers in an array:
//var array = [1,2,3,4,5,6,7];
var PrintOdd = (array) => {
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }}    
};PrintOdd([1,2,3,4,5,6,7]);

//----------------------------------------------

 //Convert all the strings to title caps in a string array:
 //str = "life is beautiful";
 var titleCaps= (str) => {
    //str = str.toLowerCase();
    str = str.split(" ");
        for(var i=0; i<str.length;i++){
            str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
            str = str.join(' ');
        }
        console.log(str);
};titleCaps("life is beautiful");
//----------------------------------------------------------------
//sum of all numbers of an array:
var array=[3,5,7,9];
var Sum = (array) => {
    var sum=0;
    for(var i=0; i<array.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
};Sum([1,2,3,4,5,6,7]);

//--------------------------------------------------------
//Return all prime numbers in an array:

    //var arr = [2,3,4,5,6,7];
    var Prime = (arr) => 
    {
          var prime = [];
        for(var i = 0; i<arr.length; i++)
        {
              var count=0;
            for(var j=1;j<=arr[i];j++)
            {
                if(arr[i]%j==0)
                {
                    count++;
                  }
            }
                if(count<=2)
                {
                  prime.push(arr[i]);
                }
           }
         return prime;
       
    }; var num = [2,7,6,8,9];
    console.log("Prime Numbers are: "+ Prime(num));

  //----------------------------------------------
  //Return median of two sorted arrays of the same size

  var median = (arr1,arr2) => {
    var n1=arr1.length;
    var n2=arr2.length;
    var arr3=[];
    var i=0;
    var j=0;
    while(i<n1 && j<n2){
      if(arr1[i]<arr2[j]){arr3.push(arr1[i++]);}
      else{arr3.push(arr2[j++]);}
    }
  
    while (j<n1) {
      arr3.push(arr1[i++]);
    }
    while (j<n2) {
      arr3.push(arr2[j++]);
    }
    var n = (n1+n2);
    if(n%2==1){
      return arr3[n/2];
    }
    return ((arr3[n/2] + arr3[n/2 - 1])/2).toFixed(0);
  };
  var output = median([1,2,3,4],[5,6,7,8]);
  console.log(output);

  //-------------------------------------------------

  //Remove duplicates from an array
  var array = [1,2,3,4,4,5,6,6];
  var FinalArr = [...new Set(array)];
  console.log(FinalArr);

  //----------------------------------------------------
  //Rotate an array by K times.
  var rotate = (num, k) =>  {
    var n=num.length;
    k%=n;
    var rotated = [];
    for(var i=0;i<n;i++){
      rotated[(i+k)%n] = num[i];
    }
    for (let i = 0; i < n; i++) {
     num[i] = rotated[i]; 
    }
  };rotate([1,2,3,4], 3);
