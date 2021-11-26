const GRAPHQL_URL = 'http://localhost:9000/';

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data;
}

/*Lets create a fetch for the user we created in the server and try it out*/


/*First of all, lest fetch the username*/
async function fetchFirst_Name() {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            first_name
          }
        `,
      }),
    });
  
    const { data } = await response.json();
    return data;
  }



/*Lets continue eith the last_name*/
async function fetchLast_Name() {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            last_name
          }
        `,
      }),
    });
  
    const { data } = await response.json();
    return data;
  }




/*Last but not least, the id*/
async function fetchId() {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            id
          }
        `,
      }),
    });
  
    const { data } = await response.json();
    return data;
  }


fetchGreeting().then(({ greeting }) => {
  const title = document.querySelector('h1');
  title.textContent = greeting;
});

fetchFirst_Name().then(({ first_name }) => {
    const title = document.querySelector('h2');
    title.textContent = first_name;
  }).then(fetchLast_Name().then(({ last_name }) => {
    const title = document.querySelector('h3');
    title.textContent = last_name;
  })).then(fetchId().then(({ id }) => {
    const title = document.querySelector('h4');
    title.textContent = id;
  }));

