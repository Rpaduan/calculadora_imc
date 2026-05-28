const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

function inputs() {
    inputWeight.value = ""
    inputHeight.value = ""
}

export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .tittle span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
    inputs()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown() {
    if (event.key === 'Escape') {
        Modal.close()
        inputs()
    }
}