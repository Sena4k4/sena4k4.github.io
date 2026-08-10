$(document).ready(function () {
    if (typeof AnimOnScroll !== 'function') {
        return;
    }

    document.querySelectorAll('.grid-lod').forEach(function (grid) {
        new AnimOnScroll(grid, {
            minDuration: 0.4,
            maxDuration: 0.7,
            viewportFactor: 0.2
        });
    });
});
