function displayCapital() {
    var states = ['arizona', 'alaska', 'arkansas', 'california', 'texas']
    var capitals = ['Phoenix', 'Juneau', 'Little Rock', 'Sacramento', 'Austin']
    var selectState = document.getElementById('state');
    document.getElementById('state-display').textContent = "";

    document.getElementById('state-display').textContent = capitals[states.indexOf(selectState.value)];
}

document.getElementById('state').addEventListener('change', displayCapital);