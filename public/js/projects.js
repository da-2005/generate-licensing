const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
  console.log(name);
    if (name) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ project_name: name }),
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