const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

fetch(url)
  .then( response  => response.json())
  .then( data  => {
    
    
    console.log(data);
    console.log(data.Name);
    console.log(data.Image);

    
    const roster = document.querySelector(".roster");

    
    data.forEach( student => {
      
      
      const template = `
          <figure>
            <figcaption> ${student.name} </figcaption>
            
            <img src=" ${student.imageUrl} " alt=" ${student.Name} ">
            <p>Status: ${student.status}</p>
            <p>Fun Fact: ${student.funFact}</p>
            <p>Favorite Color: ${student.favoriteColor}</p>
            <p>Team: ${student.team}</p>
            <p>Motto: ${student.motto}</p>
            <p>Favorite Fictional Character: ${student.favoriteSimpsonsCharacter}</p>
            <p>Favorite Band: ${student.favoriteBand}</p>
            <p>Favorite Dish: ${student.favoriteFood}</p>
            <p>Talent: ${student.talent}</p>
            <p>Favorite Song: ${student.favoriteSong}</p>
          </figure>
       `;

      roster.insertAdjacentHTML("afterbegin", template);
    });
  });