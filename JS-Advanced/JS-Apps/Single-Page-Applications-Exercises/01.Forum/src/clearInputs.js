export function onCancel(event) {
    event.preventDefault();
    document.querySelectorAll('form [type="text"]').forEach(element => {
        element.value = '';
    })
}