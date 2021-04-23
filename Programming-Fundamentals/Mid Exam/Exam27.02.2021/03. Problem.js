function chat(input) {
    let chatList = [];

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        if (command === 'Chat') {
            let message = firstArg;
            chatList.push(message);
        } else if (command === 'Delete') {
            let messageToDelete = firstArg;
            let index = chatList.indexOf(messageToDelete);

            if (index >= 0) {
                chatList.splice(index, 1);
            }
        } else if (command === 'Edit') {
            let messageToEdit = firstArg;
            let editedVersion = secondArg;
            let index = chatList.indexOf(messageToEdit);

            if (index >= 0) {
                chatList.splice(index, 1, editedVersion);
            }
        } else if (command === 'Pin') {
            let message = firstArg;
            let index = chatList.indexOf(message);

            if (index >= 0) {
                chatList.splice(index, 1);
                chatList.push(message);
            }
        } else if (command === 'Spam') {
            let splitedSpam = line.split(' ').filter((v, i) => i > 0);
            chatList = addSpam(splitedSpam, chatList);
        } else if (command === 'end') {
            break;
        }
    }
    function addSpam(spamArr, chatArr) {
        for (let msg of spamArr) {
            chatArr.push(msg);
        }

        return chatArr;
    }
    console.log(chatList.join('\n'));
}
chat((["Chat John",

    "Spam Let's go to the zoo",

    "Edit zoo cinema",

    "Chat tonight",

    "Pin John",

    "end"]));
    console.log(`-------`);
chat(["Chat Hello",

    "Chat darling",

    "Edit darling Darling",

    "Spam how are you",

    "Delete Darling",

    "end"]);