function firstDayWeek(week, year) {
    return new Date(year, 0, 1 + (week - 1) * 7).getDay();
}
