const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';
const makeCommit = n => {
    if(n===0) return simpleGit().push();
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const x = randomInt(0,54);
    const y = randomInt(0,6);  

    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();

    const date = {
    
        date : DATE
    }
    
    console.log(DATE);
    
    jsonfile.writeFile(FILE_PATH, date, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},makeCommit.bind(this, --n));
    
    });

}


makeCommit(100);

// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const FILE_PATH = './data.json';

// const makeCommit = n => {
//     if (n === 0) return simpleGit().push();

//     // Helper function for random integers
//     const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//     // Random weeks, days, hours, minutes, and seconds
//     const x = randomInt(0, 54); // Weeks
//     const y = randomInt(0, 6);  // Days
//     const hours = randomInt(0, 23); // Hours
//     const minutes = randomInt(0, 59); // Minutes
//     const seconds = randomInt(0, 59); // Seconds

//     // Generate random date and time
//     const DATE = moment()
//         .subtract(1, 'y')
//         .add(1, 'd')
//         .add(x, 'w')
//         .add(y, 'd')
//         .set({ hour: hours, minute: minutes, second: seconds }) // Set random time
//         .format();

//     // Prepare data for the JSON file
//     const date = {
//         date: DATE,
//     };

//     console.log(DATE);

//     // Write to file and commit with the random date
//     jsonfile.writeFile(FILE_PATH, date, () => {
//         simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
//     });
// };

// makeCommit(50);
