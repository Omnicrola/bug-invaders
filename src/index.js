function component() {
    var element = document.createElement('div');

    element.innerHTML = 'HELLO';
    return element;
}

document.body.appendChild(component());
