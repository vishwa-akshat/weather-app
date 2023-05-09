export function formattedDate(unformattedDate) {
    const dateString = unformattedDate;
    const date = new Date(dateString);

    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
}
