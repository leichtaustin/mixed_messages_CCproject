
//Initial creation of arrays with selected options for the message
const distances = ['400 meters', '800 meters', '1600 meters'];
const reps = [2, 3, 4, 5];
const terrain = ['flat road', 'hills', 'mountains', 'flat trail'];

//Function to create random string, returns a string
const messageCreator = () => {
    let distance = distances[Math.floor(Math.random() * distances.length)];
    let repetitions = reps[Math.floor(Math.random() * reps.length)];
    let terrainType = terrain[Math.floor(Math.random() * terrain.length)];
    return `Workout Option: ${repetitions} by ${distance} on ${terrainType}`;
};

const workoutOptions = () => {
    let workoutOptionArr = [];
    let workoutString;
    while (workoutOptionArr.length < 3) {
        workoutString = messageCreator();
        while (workoutOptionArr.includes(workoutString)) {
            workoutString = messageCreator();
        };
        workoutOptionArr.push(workoutString);
    };
    return workoutOptionArr;
}

const workouts = workoutOptions();
console.log(workouts[0]);
console.log(workouts[1]);
console.log(workouts[2]);
