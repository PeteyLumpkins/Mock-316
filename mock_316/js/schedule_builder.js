let week_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function build_schedule_table(schedule_data) {
    let table = document.createElement("table");
    let body = document.createElement("tbody");

    table.classList = ["schedule"];

    for (let i = 0; i < schedule_data['weeks'].length; i++) {
        body.append(build_weekdays(week_days));
        body.append(build_week(schedule_data['weeks'][i]))
    }
    
    table.append(body);
    return table;
}

export function build_weekdays(days) {
    let week = document.createElement("tr");
    week.classList = ["weekdays"];

    for (let i = 0; i < days.length; i++) {
        let day = document.createElement("th");
        day.classList = ["weekday"];
        day.append(week_days[i]);

        week.append(day);
    }
    return week;
}

export function build_week(week_data) {
    let week = document.createElement("tr");
    week.classList = ["week"];
    for (let i = 0; i < week_data.length; i++) {
        week.append(build_day_box(week_data[i]['day'], 
                                  week_data[i]['month'],
                                  week_data[i]['number'],
                                  week_data[i]['desc']));
    }
    return week;
}

export function build_day_box(day, month, lecture, description) {
    let day_box = document.createElement("td");

    day_box.id = month + "-" + day;
    day_box.classList = ["day box"]
    day_box.append(month + "/" + day);

    if (lecture > -1) {
        let line_break = document.createElement("br");
        day_box.append(line_break);
        day_box.append("Lecture " + lecture);
    }
    let line_break = document.createElement("br");
        day_box.append(line_break);
        day_box.append(description);

    return day_box;
}
