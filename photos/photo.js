
const typeArray = ['profile', 'haircut', 'barber']

const imgUrl = '';

const canAddInfo = (imgObj) => ({

    addDescription: (description) => {

        if(description.length <= 160){
            Object.defineProperty(imgObj, 'description', {
                value: description,
                writable: true,
                enumerable: true
            });
        }
        else{
            //Error: description too long
        }
    }
    //sets the type of photo with parameter provided
    setType: (type) => {
        //checks to see if paramter is a valid photoType
        if(typeArray.includes(type)){
            //sets type property to non-writable value on photoObj
            Object.defineProperty(imgObj, 'type', {
                value: type,
                enumerable: true
            });
        }
    }

});

export const img = (userId, imgUrl) => {

    let state = {
        user: userId,
        img: imgUrl,
        description: ''
    }
    return Object.assign(state, canAddInfo(state));

}
