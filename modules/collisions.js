export function collisions(player, canvas) {
    return topCollisons(player.y + player.gravity, canvas, player.length);
}

function topCollisons(nextY, canvas, playerLength) {
    let heightMin = canvas.height * 0.1;
    let heightMax = canvas.height * 0.9 - playerLength;
    if (nextY >= heightMin && nextY <= heightMax) {
        return false;
    } else {
        return true;
    }
}