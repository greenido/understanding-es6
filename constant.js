/**
  * constant is a single assignment variable.
  */

function foo(){
    const i = 1;
    
    var bar = i; // 1 - you can asign the value of the const to another variable
    var i = 2;  // error because we defined 'i' as const at line 6
}

function fooTwo(){
    const object = {
        nestedProperty: 1
    };
    
    object = 2; // error because we defined object as const at linr 13
    object.nestedProperty = 2;  // no error - you can define the nested value of a const object. But please be careful.
}
