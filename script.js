const scheduleData = {
    "شنبه": [
      { "time": "08:00 - 09:30", "class": "دوبله" , "teacher": "محمد محمدزاده"},
    ],

    "یک‌‌شنبه": [
    ],

    "دوشنبه": [

    ],

    "سه‌شنبه": [
        { "time": "12:00 - 14:00", "class": "داستان نویسی" , "teacher": "محمد محمدزاده"},
        { "time": "15:30 - 17:00", "class": "دوبله" , "teacher": "محمد محمدزاده"},

    ],

    "چهارشنبه": [
        { "time": "12:00 - 14:00", "class": "گویندگی" , "teacher": "بهنام صادقی"},

    ],
    "پنج‌شنبه": [
        { "time": "12:00 - 14:00", "class": "داستان نویسی" , "teacher": "محمد محمدزاده"},
        { "time": "15:30 - 17:00", "class": "گویندگی" , "teacher": "بهنام صادقی"},

    ],
    "جمعه": [

    ]
  };
  
  function loadSchedule(day) {
    const classList = document.getElementById('class-list');
    classList.innerHTML = ''; 
  
    const classes = scheduleData[day];
    if (classes.length === 0) {
      classList.innerHTML = `<p>No classes available for ${day}.</p>`;
      return;
    }
  
    // نمایش کلاس‌ها
    classes.forEach((item) => {
      const classItem = document.createElement('div');
      classItem.classList.add('class-item');
      classItem.innerHTML = `<span>${item.time}</span> <span>${item.class}</span> <span>${item.teacher}</span>`;
      classList.appendChild(classItem);
    });
  }
