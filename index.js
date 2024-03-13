function dados() {
    let dice = 0;
    while (dice !== 6) {
      dice = Math.trunc(Math.random() * 6) + 1;
      alert(`You rolled a ${dice}`);
      if (dice === 6) {
        alert("Loop is about to end... You rolled a 6!");
      }
    }
  }
  
  dados();