export const mineColor = () => {
    let colors = ["blue", "orange", "red", "pink", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
};