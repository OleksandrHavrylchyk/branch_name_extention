let button = document.getElementById('submitButton');

button.onclick = function() {
    formatAndCopy();
};

function formatAndCopy() {
    let input = document.getElementById('taskName');
    input.value = formatString(input.value);

    input.select();
    document.execCommand("copy");
}

function formatString(str) {
    let formatedString = str.replace(':', '')
                            .replace(/[^\w\s]/gi, '_')
                            .split(' ')
                            .join('_')
                            .toLowerCase();

    if (formatedString.startsWith('product_backlog_item')) {
        return 'feature/' + formatedString.replace('product_backlog_item_', 'story-');       
    }
    
    if (formatedString.startsWith('task')) {
        return 'feature/' + formatedString.replace('task_', 'task-');       
    }

    if (formatedString.startsWith('bug')) {
        return 'fix/' + formatedString.replace('bug_', 'bug-');
    }
    
    return str
}