//so why was primise created -- It is a standaridized way of javascript to deal with the asynchrous parts of the javascrippt and to handle it

const PENDING=0;

const fullfilled=1;

const rejected=2;




function CustomPromise(executor) {


    let state=PENDING; //I am gonna pass this work to this function so this is the owner of the funcion hence when the work has not been done it will be simply in the pending state

    let value=null;

    let handlers=[];

    let catchers = [];


    function resolve(ans)
    {
          if(state!==PENDING) return;
          
          value=ans;

          console.log(value);

          handlers.forEach((h) => h(value));

    }

    function reject(ans)
    {
          if(state!==PENDING) return;
          
          value=ans;
          

          console.log(value);

          catchers.forEach((h) => h(value));

    }

    this.then=(someFunction) => {
          if(state===fullfilled) someFunction(val);

          handlers.push(someFunction);
    }


    executor(resolve,reject);
};

const executor=(resolve,reject) => {
       setTimeout(() => {
           resolve('So 1 second has passed');
       },1000);

}


const doworkasynchrounouly=new CustomPromise(executor);

doworkasynchrounouly.then(() => {
    console.log('1');
});


doworkasynchrounouly.then(() => {
    console.log('2');
});



//This executor function is our main function and what it mainly does is it performs task and wehn it performs taks the taks either get done or wither dont get done hence the point beign when done it calls resolve and when not done calls reject