class Exercises {
    _exercises = [];

    constructor(exercises) {
        exercises.forEach(exercise => {
            this._exercises.push({
                id: exercise.id,
                upload_time: exercise.upload_time,
                device: exercise.device,
                start_time: exercise.start_time,
                start_time_utc_offset: exercise.start_time_utc_offset,
                duration: exercise.duration,
                heart_rate: exercise.heart_rate,
                sport: exercise.sport,
                has_route: exercise.has_route,
                detailed_sport_info: exercise.detailed_sport_info,
                calories: exercise.calories,
            })
        })
    }

    getExercises() {
        return this.exercises;
    }
}

export default new Exercises;