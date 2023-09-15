/*
You're creating a simple to do list. 

Given an array of tasks to complete, print each task out 
in a numbered list indicating the order of the tasks.

Example input: ["Do dishes", "Sweep floor", "Feed dog"]

Example output:
1. Do dishes
2. Sweep floor
3. Feed dog

Note: This is totally separate/different from the to do list project.
*/

const tasks = ["Buy groceries", "Finish homework", "Go for a run", "Call a friend"];


//add your code below
//I did not know that adding the [i] to tasks would separate the out comes.
//When I ran the code without the task[i] it just repeated the code 5 times.
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
}