# Train-Scheduler
Train Scheduler for HW7 (made optional)

## Task

Make a train scheduler that uses Firebase for storage. Display a table of trains, listing the name of the service, the destination, the frequency, the next predicted train (calculated), and minutes remaining from now until its next arrival (calculated). Allow users to input new trains with name, destination, frequency, and first train time.

Assumptions:

* Trains first time is per day, so schedules do not drift from day to day
* Schedules are accurate
* Trains are not on fire (thanks, WMATA)

New technologies and concepts

* Moment.js for time calcuations, to learn JS libraries
* Firebase for data persistence and remote (flat) database usage, also live updating
* (Optional) Timed events for minute-by-minute updates
* (Optional) Firebase authentication to allow only authorized users to add trains and write to database

Technologies already used: HTML, CSS, Bootstrap, JavaScript, jQuery