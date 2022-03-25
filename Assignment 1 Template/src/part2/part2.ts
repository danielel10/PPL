import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters =  (s: string) =>  {
    const arr1 = stringToArray(R.toLower(s));
    return R.reduce((acc,curr) => {
        if(acc[curr] != undefined) {
            acc[curr]++;
            return acc;
        }
        else {
            acc[curr] =  1;
            return acc;
        }
            
    }, Object.create({}), arr1)
    
}

console.log(countLetters("ABbbaab"))

/* Question 2 */
export const isPaired: (s: string) => boolean = undefined

// /* Question 3 */
// interface WordTree {
//     root: string;
//     children: WordTree[];
// }

// export const treeToSentence = (t: WordTree): string => undefined

