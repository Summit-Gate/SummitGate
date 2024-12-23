document.getElementById('studyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const task = document.getElementById('task').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;

    const taskList = document.querySelector('.task-list');
    const today = new Date();
    const deadlineDate = new Date(deadline);

    // Calculate days remaining
    const daysRemaining = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    // Suggest time based on priority and days remaining
    let suggestedTime;
    if (priority === 'High') {
        suggestedTime = daysRemaining <= 2 ? '4+ hours/day' : '2-4 hours/day';
    } else if (priority === 'Medium') {
        suggestedTime = daysRemaining <= 2 ? '2-3 hours/day' : '1-2 hours/day';
    } else if (priority === 'Low') {
        suggestedTime = daysRemaining <= 2 ? '1-2 hours/day' : '<1 hour/day';
    }

    // Create task box
    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    taskBox.innerHTML = `
        <h3>${task}</h3>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Suggested Time:</strong> ${suggestedTime}</p>
    `;

    // Add task box to the task list
    taskList.appendChild(taskBox);

    // Clear form
    document.getElementById('studyForm').reset();
});
