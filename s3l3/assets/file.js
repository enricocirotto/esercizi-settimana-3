function addReminder() {
    const inputElement = document.getElementById('reminderInput');
    const reminderText = inputElement.value;
  
    if (reminderText.trim() === '') {
      alert('non puoi mandare il form vuoto :)');
      return;
    }
  
    const reminderListElement = document.getElementById('reminderList');
    const newReminderElement = document.createElement('div');
    newReminderElement.className = 'task-container'; 
  
    
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'select-checkbox';
    checkboxContainer.appendChild(checkbox);
    newReminderElement.appendChild(checkboxContainer);
  
    
    const reminderTextElement = document.createElement('span');
    reminderTextElement.textContent = reminderText;
    reminderTextElement.className = 'reminder-text'; 
    newReminderElement.appendChild(reminderTextElement);
  
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Cancella';
    deleteButton.className = 'delete-button'; 
    deleteButton.addEventListener('click', function() {
      reminderListElement.removeChild(newReminderElement);
    });
  
    newReminderElement.appendChild(deleteButton);
    reminderListElement.appendChild(newReminderElement);
  
    inputElement.value = '';
  }