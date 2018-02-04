
const id = '';

const like = { selected: false };

const rating = { amount: 0 };

const comment = {body: ''};


const review = (userId, state) => {

  if(state typeof boolean){

    like = state;
    return Object.assign({}, like, id, userId);

  }else if(state typeof 'number'){

    rating = state;
    return Object.assign({}, rating, id, userId);

  }else if(state typeof 'string'){

    comment = state;
    return Object.assign({}, comment, id, userId);

  }
}
