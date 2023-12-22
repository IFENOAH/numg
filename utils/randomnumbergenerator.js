export const generateRandomNumberBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exclude){
        return generateRandomNumberBetween(min, max, exclude)
    }
    return randomNumber;
}