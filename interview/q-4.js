function child ( ){
    // create a new array or use a single array and make it empty every time function invokes
    console.log('ok')
    }
    function parent ( ) {
       for ( let i=0; i< 10; i++ ) {
          child ( );
       }
    }
    parent()