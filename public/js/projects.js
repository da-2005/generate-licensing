const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const projectKey = document.querySelector('#project-key').value.trim();
  
    if (name && projectKey) {
      const response = await fetch(`/users/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, projectKey}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/users/projects');
      } else {
        alert('Failed to create project');
      }
    }
  };


  document
  .querySelector('#new-project')
  .addEventListener('submit', newFormHandler);