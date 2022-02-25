const books= [
    'You Don’t Know JS ', 
    'Effective JavaScript',
    'A Smarter Way to Learn JavaScript',
    'Eloquent JavaScript',
    'JavaScript and jQuery',
     'Composing Software'
    ];

    const js = 'javaScript';
    const jsNewArray= [];

    for(const jsBooks of books){

        if( jsBooks.toLowerCase().indexOf(js.toLowerCase()) !=-1 ){

            jsNewArray.push(jsBooks);
        }
    }
    // console.log(jsNewArray);

    const items = [
        'starex monitors',
        'Dell laptop',
        'samsung laptop',
        'sony monitors',
        'lg monitors',
        'Asus laptop',
        'Hp laptop',
        'walton tv'
       ];

       const searchProduct = 'laptop';
       const newArray =[]; 
       for(const allItems of items){
       if( allItems.toLowerCase().indexOf(searchProduct.toLowerCase()) !=-1 ){
            newArray.push(allItems);

        }

    }
   // console.log(newArray);
    const searchingMonitors ='monitors'
   const newItem =[];
   for(const product of items ){
       if(product.toLowerCase().includes(searchingMonitors.toLowerCase())){

            newItem.push(product);
       }
   }
   console.log(newItem);

//  Array sort

   const num= [9,8,7,6,5,4,1,2,3,0];
    const sortNum = num.sort();
console.log(sortNum);   
const num2= [90,64,74,86,45,43,10,52,30,];

  const sortNum2 = num2.sort(function(a,b){return a-b});
  console.log(sortNum2);

