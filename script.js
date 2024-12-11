 async function loadSchedule(day) {

  let scheduleData = {};

const response = await fetch('https://mastermmz.github.io/kanonha_api/data.json');
const data = await response.json();
console.log("HI");
console.log(data);

  console.log("H1");
  scheduleData = data;
  console.log(scheduleData);
  const classList = document.getElementById('class-list');
  classList.innerHTML = ''; 

  console.log("H2");

  const classes = scheduleData[day];
  console.log(classes);
  if (classes.length === 0) {
    classList.innerHTML = `<p>No classes available for ${day}.</p>`;
    return;
  }

  console.log("H3");

  classes.forEach((item) => {
    const classItem = document.createElement('div');
    classItem.classList.add('class-item');
    classItem.innerHTML = `<span>${item.time}</span> <span>${item.class}</span> <span>${item.teacher}</span>`;
    classList.appendChild(classItem);
  });
}

