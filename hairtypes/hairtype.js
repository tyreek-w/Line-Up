use strict;

const typeSwitch = [
  [1,  1,    1,    1  ],
  [2, '2a', '2b', '2c'],
  [3, '3a', '3b', '3c'],
  [4, '4a', '4b', '4c']
];

const hairType = (state) => {

  for(let type of typeSwitch){
    for(let subType of type) {

      if(state == subType) {
        let option = subType;
        return Object.assign({}, option);
      };

    };
  };
};
